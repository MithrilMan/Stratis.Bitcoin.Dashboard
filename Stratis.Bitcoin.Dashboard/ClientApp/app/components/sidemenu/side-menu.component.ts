import { Component } from '@angular/core';
import { isBrowser } from 'angular2-universal';
import { WindowRef } from './services/window-ref';
import * as $ from 'jquery';

@Component({
   selector: 'side-menu',
   template: require('./side-menu.component.html'),
   styles: [require('./side-menu.component.css')]
})
export class SideMenuComponent {
   public isDevMode: boolean;
   private _currentUrl: string;
   private _$body: JQuery;
   private _$menuToggle: JQuery;
   private _$sidebarMenu: JQuery;
   private _$sidebarFooter: JQuery;
   private _$leftCol: JQuery;
   private _$rightCol: JQuery;
   private _$navMenu: JQuery;
   private _$footer: JQuery;

   public constructor(private winRef: WindowRef) {
      var env = process.env.ASPNET_ENV || "Development";
      this.isDevMode = env === "Development";

      if (isBrowser) {
         this._$body = $('body');
         this._$menuToggle = $('#menu_toggle');
         this._$sidebarMenu = $('#sidebar-menu');
         this._$sidebarFooter = $('.sidebar-footer');
         this._$leftCol = $('.left_col');
         this._$rightCol = $('.right_col');
         this._$navMenu = $('.nav_menu');
         this._$footer = $('footer');

         this._currentUrl = $window.location.href.split('#')[0].split('?')[0];

         this.Init();
      }
   }


   private SetContentHeight() {
      // TODO: This is some kind of easy fix, maybe we can improve this
      // reset height
      debugger;
      if (window != undefined) {
         this._$rightCol.css('min-height', $(window).height());
      }

      var bodyHeight = this._$body.outerHeight(),
         footerHeight = this._$body.hasClass('footer_fixed') ? -10 : this._$footer.height(),
         leftColHeight = this._$leftCol.eq(1).height() + this._$sidebarFooter.height(),
         contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

      // normalize content
      contentHeight -= this._$navMenu.height() + footerHeight;

      this._$rightCol.css('min-height', contentHeight);
   }



   public onMenuClick() {
      console.log('clicked - sidebar_menu');
      var $li = $(this).parent();


      if ($li.is('.active')) {
         $li.removeClass('active active-sm');
         $('ul:first', $li).slideUp(this.SetContentHeight);
      } else {
         // prevent closing menu if we are on child menu
         if (!$li.parent().is('.child_menu')) {
            this._$sidebarMenu.find('li').removeClass('active active-sm');
            this._$sidebarMenu.find('li ul').slideUp();
         } else {
            if (this._$body.is(".nav-sm")) {
               this._$sidebarMenu.find("li").removeClass("active active-sm");
               this._$sidebarMenu.find("li ul").slideUp();
            }
         }
         $li.addClass('active');

         $('ul:first', $li).slideDown(this.SetContentHeight);
      }
   }

   public Init() {
      this._$sidebarMenu.find('a').on('click', this.onMenuClick);

      // toggle small or large menu 
      this._$menuToggle.on('click', function () {
         console.log('clicked - menu toggle');

         if (this._$body.hasClass('nav-md')) {
            this._$sidebarMenu.find('li.active ul').hide();
            this._$sidebarMenu.find('li.active').addClass('active-sm').removeClass('active');
         } else {
            this._$sidebarMenu.find('li.active-sm ul').show();
            this._$sidebarMenu.find('li.active-sm').addClass('active').removeClass('active-sm');
         }

         this._$body.toggleClass('nav-md nav-sm');

         this.SetContentHeight();
      });

      // check active menu
      this._$sidebarMenu.find('a[href="' + this._currentUrl + '"]').parent('li').addClass('current-page');

      this._$sidebarMenu.find('a').filter((index, element) => {
         return (<HTMLAnchorElement>element).href == this._currentUrl;
      })
         .parent('li').addClass('current-page')
         .parents('ul').slideDown(this.SetContentHeight)
         .parent().addClass('active');

      // recompute content when resizing
      if (window != undefined) {
         $(window).smartresize(this.SetContentHeight());
      }

      this.SetContentHeight();

      // fixed sidebar
      if ($.fn.mCustomScrollbar) {
         $('.menu_fixed').mCustomScrollbar({
            autoHideScrollbar: true,
            theme: 'minimal',
            mouseWheel: { preventDefault: true }
         });
      }
   };
}
