(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	__webpack_require__(1);
	__webpack_require__(2);
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(4);
	var app_module_1 = __webpack_require__(5);
	core_1.enableProdMode();
	var platform = angular2_universal_1.platformNodeDynamic();
	function default_1(params) {
	    return new Promise(function (resolve, reject) {
	        var requestZone = Zone.current.fork({
	            name: 'angular-universal request',
	            properties: {
	                baseUrl: '/',
	                requestUrl: params.url,
	                originUrl: params.origin,
	                preboot: false,
	                // TODO: Render just the <app> component instead of wrapping it inside an extra HTML document
	                // Waiting on https://github.com/angular/universal/issues/347
	                document: '<!DOCTYPE html><html><head></head><body><app></app></body></html>'
	            },
	            onHandleError: function (parentZone, currentZone, targetZone, error) {
	                // If any error occurs while rendering the module, reject the whole operation
	                reject(error);
	                return true;
	            }
	        });
	        return requestZone.run(function () { return platform.serializeModule(app_module_1.AppModule); }).then(function (html) {
	            resolve({ html: html });
	        }, reject);
	    });
	}
	exports.default = default_1;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal-polyfills");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("zone.js");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var angular2_universal_1 = __webpack_require__(4);
	var app_component_1 = __webpack_require__(7);
	var navmenu_component_1 = __webpack_require__(12);
	var home_component_1 = __webpack_require__(16);
	var fetchdata_component_1 = __webpack_require__(18);
	var counter_component_1 = __webpack_require__(21);
	var side_menu_component_1 = __webpack_require__(23);
	var top_menu_component_1 = __webpack_require__(28);
	var footer_component_1 = __webpack_require__(32);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        bootstrap: [app_component_1.AppComponent],
	        declarations: [
	            app_component_1.AppComponent,
	            navmenu_component_1.NavMenuComponent,
	            side_menu_component_1.SideMenuComponent,
	            top_menu_component_1.TopMenuComponent,
	            counter_component_1.CounterComponent,
	            fetchdata_component_1.FetchDataComponent,
	            home_component_1.HomeComponent,
	            footer_component_1.FooterComponent
	        ],
	        imports: [
	            angular2_universal_1.UniversalModule,
	            router_1.RouterModule.forRoot([
	                { path: '', redirectTo: 'home', pathMatch: 'full' },
	                { path: 'home', component: home_component_1.HomeComponent },
	                { path: 'counter', component: counter_component_1.CounterComponent },
	                { path: 'fetch-data', component: fetchdata_component_1.FetchDataComponent },
	                { path: '**', redirectTo: 'home' }
	            ])
	        ]
	    })
	], AppModule);
	exports.AppModule = AppModule;


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("@angular/router");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var AppComponent = (function () {
	    function AppComponent() {
	        this.name = 'Stratis.Bitcoin.Dashboard';
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(8),
	        styles: [__webpack_require__(9)]
	    })
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<!--<div class='container-fluid'>\r\n    <div class='row'>\r\n        <div class='col-sm-3'>\r\n            <nav-menu></nav-menu>\r\n        </div>\r\n        <div class='col-sm-9 body-content'>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>-->\r\n\r\n<div class=\"container body\">\r\n   <div class=\"main_container\">\r\n      <side-menu></side-menu>\r\n      <top-menu></top-menu>\r\n\r\n      <div class=\"right_col\" role=\"main\">\r\n         <router-outlet></router-outlet>\r\n      </div>\r\n\r\n      <page-footer></page-footer>\r\n   </div>\r\n</div>"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(10);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, "@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    .body-content {\n        padding-top: 50px;\n    }\n}\n", ""]);
	
	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var NavMenuComponent = (function () {
	    function NavMenuComponent() {
	    }
	    return NavMenuComponent;
	}());
	NavMenuComponent = __decorate([
	    core_1.Component({
	        selector: 'nav-menu',
	        template: __webpack_require__(13),
	        styles: [__webpack_require__(14)]
	    })
	], NavMenuComponent);
	exports.NavMenuComponent = NavMenuComponent;


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "\r\n<!--<div class=\"top_nav\">\r\n   <div class=\"nav_menu\">\r\n      <nav>\r\n         <div class=\"nav toggle\">\r\n            <a id=\"menu_toggle\"><i class=\"fa fa-bars\"></i></a>\r\n         </div>\r\n         <ul class=\"nav navbar-nav navbar-right\">\r\n            <li class=\"\">\r\n               <a href=\"javascript:;\" class=\"user-profile dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                  <img src=\"~/images/user.png\" alt=\"\">Anonymous\r\n                  @*<span class=\"fa fa-angle-down\"></span>*@\r\n               </a>\r\n               @*<ul class=\"dropdown-menu dropdown-usermenu pull-right\">\r\n                  <li><a href=\"javascript:;\"> Profile</a></li>\r\n                  <li>\r\n                     <a href=\"javascript:;\">\r\n                        <span class=\"badge bg-red pull-right\">50%</span>\r\n                        <span>Settings</span>\r\n                     </a>\r\n                  </li>\r\n                  <li><a href=\"javascript:;\">Help</a></li>\r\n                  <li><a href=\"login.html\"><i class=\"fa fa-sign-out pull-right\"></i> Log Out</a></li>\r\n               </ul>*@\r\n            </li>\r\n            <vc:messages />\r\n         </ul>\r\n      </nav>\r\n   </div>\r\n</div>-->\r\n\r\n\r\n<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n            <a class='navbar-brand' [routerLink]=\"['/home']\">Stratis.Bitcoin.Dashboard</a>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse'>\r\n            <ul class='nav navbar-nav'>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/home']\">\r\n                        <span class='glyphicon glyphicon-home'></span> Home\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/counter']\">\r\n                        <span class='glyphicon glyphicon-education'></span> Counter\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/fetch-data']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Fetch data\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(15);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, "li .glyphicon {\n    margin-right: 10px;\n}\n\n/* Highlighting rules for nav menu items */\nli.link-active a,\nli.link-active a:hover,\nli.link-active a:focus {\n    background-color: #4189C7;\n    color: white;\n}\n\n/* Keep the nav menu independent of scrolling and on top of other items */\n.main-nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n}\n\n@media (min-width: 768px) {\n    /* On small screens, convert the nav menu to a vertical sidebar */\n    .main-nav {\n        height: 100%;\n        width: calc(25% - 20px);\n    }\n    .navbar {\n        border-radius: 0px;\n        border-width: 0px;\n        height: 100%;\n    }\n    .navbar-header {\n        float: none;\n    }\n    .navbar-collapse {\n        border-top: 1px solid #444;\n        padding: 0px;\n    }\n    .navbar ul {\n        float: none;\n    }\n    .navbar li {\n        float: none;\n        font-size: 15px;\n        margin: 6px;\n    }\n    .navbar li a {\n        padding: 10px 16px;\n        border-radius: 4px;\n    }\n    .navbar a {\n        /* If a menu item's text is too long, truncate it */\n        width: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n}\n", ""]);
	
	// exports


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    return HomeComponent;
	}());
	HomeComponent = __decorate([
	    core_1.Component({
	        selector: 'home',
	        template: __webpack_require__(17)
	    })
	], HomeComponent);
	exports.HomeComponent = HomeComponent;


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<h1>Hello, world!</h1>\n<p>Welcome to your new single-page application, built with:</p>\n<ul>\n    <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\n    <li><a href='https://angular.io/'>Angular 2</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\n    <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>\n    <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\n</ul>\n<p>To help you get started, we've also set up:</p>\n<ul>\n    <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\n    <li><strong>Server-side prerendering</strong>. For faster initial loading and improved SEO, your Angular 2 app is prerendered on the server. The resulting HTML is then transferred to the browser where a client-side copy of the app takes over.</li>\n    <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>\n    <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, your Angular 2 app will be rebuilt and a new instance injected is into the page.</li>\n    <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\n</ul>\n"

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(19);
	var FetchDataComponent = (function () {
	    function FetchDataComponent(http) {
	        var _this = this;
	        http.get('/api/SampleData/WeatherForecasts').subscribe(function (result) {
	            _this.forecasts = result.json();
	        });
	    }
	    return FetchDataComponent;
	}());
	FetchDataComponent = __decorate([
	    core_1.Component({
	        selector: 'fetchdata',
	        template: __webpack_require__(20)
	    }),
	    __metadata("design:paramtypes", [http_1.Http])
	], FetchDataComponent);
	exports.FetchDataComponent = FetchDataComponent;


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("@angular/http");

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<h1>Weather forecast</h1>\n\n<p>This component demonstrates fetching data from the server.</p>\n\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\n\n<table class='table' *ngIf=\"forecasts\">\n    <thead>\n        <tr>\n            <th>Date</th>\n            <th>Temp. (C)</th>\n            <th>Temp. (F)</th>\n            <th>Summary</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let forecast of forecasts\">\n            <td>{{ forecast.dateFormatted }}</td>\n            <td>{{ forecast.temperatureC }}</td>\n            <td>{{ forecast.temperatureF }}</td>\n            <td>{{ forecast.summary }}</td>\n        </tr>\n    </tbody>\n</table>\n"

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var CounterComponent = (function () {
	    function CounterComponent() {
	        this.currentCount = 0;
	    }
	    CounterComponent.prototype.incrementCounter = function () {
	        this.currentCount++;
	    };
	    return CounterComponent;
	}());
	CounterComponent = __decorate([
	    core_1.Component({
	        selector: 'counter',
	        template: __webpack_require__(22)
	    })
	], CounterComponent);
	exports.CounterComponent = CounterComponent;


/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<h2>Counter</h2>\n\n<p>This is a simple example of an Angular 2 component.</p>\n\n<p>Current count: <strong>{{ currentCount }}</strong></p>\n\n<button (click)=\"incrementCounter()\">Increment</button>\n"

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var $ = __webpack_require__(24);
	var SideMenuComponent = (function () {
	    function SideMenuComponent() {
	        debugger;
	        var env = process.env.ASPNET_ENV || "Development";
	        this.isDevMode = env === "Development";
	        this._$body = $('body');
	        this._$menuToggle = $('#menu_toggle');
	        this._$sidebarMenu = $('#sidebar-menu');
	        this._$sidebarFooter = $('.sidebar-footer');
	        this._$leftCol = $('.left_col');
	        this._$rightCol = $('.right_col');
	        this._$navMenu = $('.nav_menu');
	        this._$footer = $('footer');
	        this._currentUrl = window.location.href.split('#')[0].split('?')[0];
	        this.Init();
	    }
	    SideMenuComponent.prototype.SetContentHeight = function () {
	        // TODO: This is some kind of easy fix, maybe we can improve this
	        // reset height
	        debugger;
	        if (window != undefined) {
	            this._$rightCol.css('min-height', $(window).height());
	        }
	        var bodyHeight = this._$body.outerHeight(), footerHeight = this._$body.hasClass('footer_fixed') ? -10 : this._$footer.height(), leftColHeight = this._$leftCol.eq(1).height() + this._$sidebarFooter.height(), contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;
	        // normalize content
	        contentHeight -= this._$navMenu.height() + footerHeight;
	        this._$rightCol.css('min-height', contentHeight);
	    };
	    SideMenuComponent.prototype.onMenuClick = function () {
	        console.log('clicked - sidebar_menu');
	        var $li = $(this).parent();
	        if ($li.is('.active')) {
	            $li.removeClass('active active-sm');
	            $('ul:first', $li).slideUp(this.SetContentHeight);
	        }
	        else {
	            // prevent closing menu if we are on child menu
	            if (!$li.parent().is('.child_menu')) {
	                this._$sidebarMenu.find('li').removeClass('active active-sm');
	                this._$sidebarMenu.find('li ul').slideUp();
	            }
	            else {
	                if (this._$body.is(".nav-sm")) {
	                    this._$sidebarMenu.find("li").removeClass("active active-sm");
	                    this._$sidebarMenu.find("li ul").slideUp();
	                }
	            }
	            $li.addClass('active');
	            $('ul:first', $li).slideDown(this.SetContentHeight);
	        }
	    };
	    SideMenuComponent.prototype.Init = function () {
	        var _this = this;
	        this._$sidebarMenu.find('a').on('click', this.onMenuClick);
	        // toggle small or large menu 
	        this._$menuToggle.on('click', function () {
	            console.log('clicked - menu toggle');
	            if (this._$body.hasClass('nav-md')) {
	                this._$sidebarMenu.find('li.active ul').hide();
	                this._$sidebarMenu.find('li.active').addClass('active-sm').removeClass('active');
	            }
	            else {
	                this._$sidebarMenu.find('li.active-sm ul').show();
	                this._$sidebarMenu.find('li.active-sm').addClass('active').removeClass('active-sm');
	            }
	            this._$body.toggleClass('nav-md nav-sm');
	            this.SetContentHeight();
	        });
	        // check active menu
	        this._$sidebarMenu.find('a[href="' + this._currentUrl + '"]').parent('li').addClass('current-page');
	        this._$sidebarMenu.find('a').filter(function (index, element) {
	            return element.href == _this._currentUrl;
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
	    ;
	    return SideMenuComponent;
	}());
	SideMenuComponent = __decorate([
	    core_1.Component({
	        selector: 'side-menu',
	        template: __webpack_require__(25),
	        styles: [__webpack_require__(26)]
	    }),
	    __metadata("design:paramtypes", [])
	], SideMenuComponent);
	exports.SideMenuComponent = SideMenuComponent;


/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "<div class=\"col-md-3 left_col menu_fixed\">\r\n   <div class=\"left_col scroll-view\">\r\n      <div class=\"navbar nav_title\" style=\"border: 0;\">\r\n         <a asp-area=\"\" asp-controller=\"Home\" asp-action=\"Index\" class=\"site_title\">Stratis Dashboard</a>\r\n         <p *ngIf=\"isDevMode\" style=\"color:red;text-align:center;margin-top:-10px;\">DEVELOPMENT BUILD</p>\r\n      </div>\r\n      <div class=\"clearfix\"></div>\r\n      <!-- menu profile quick info -->\r\n      <div class=\"profile clearfix\">\r\n         <div class=\"profile_pic\">\r\n            <img src=\"images/user.png\" alt=\"...\" class=\"img-circle profile_img\">\r\n         </div>\r\n         <div class=\"profile_info\">\r\n            <span>Welcome,</span>\r\n            <h2>Anonymous</h2>\r\n         </div>\r\n      </div>\r\n      <!-- /menu profile quick info -->\r\n      <br />\r\n      <!-- sidebar menu -->\r\n      <div id=\"sidebar-menu\" class=\"main_menu_side hidden-print main_menu\">\r\n         <div class=\"menu_section\">\r\n            <h3>General</h3>\r\n            <ul class=\"nav side-menu\">\r\n               <li>\r\n                  <a><i class=\"fa fa-home\"></i> Home <span class=\"fa fa-chevron-down\"></span></a>\r\n                  <ul class=\"nav child_menu\">\r\n                     <li is-active-route asp-controller=\"Home\" asp-action=\"Index\">\r\n                        <a asp-controller=\"Home\" asp-action=\"Index\"><i class=\"fa fa-fw fa-dashboard\"></i> Dashboard</a>\r\n                     </li>\r\n                     <li is-active-route asp-controller=\"Home\" asp-action=\"NodeSettings\">\r\n                        <a asp-controller=\"Home\" asp-action=\"NodeSettings\"><i class=\"fa fa-fw fa-cog\"></i> Node Settings</a>\r\n                     </li>\r\n                  </ul>\r\n               </li>\r\n            </ul>\r\n         </div>\r\n      </div>\r\n      <!-- /sidebar menu -->\r\n      <!-- /menu footer buttons -->\r\n      <div class=\"sidebar-footer hidden-small\">\r\n         <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Settings\">\r\n            <span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span>\r\n         </a>\r\n         <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"FullScreen\">\r\n            <span class=\"glyphicon glyphicon-fullscreen\" aria-hidden=\"true\"></span>\r\n         </a>\r\n         <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Lock\">\r\n            <span class=\"glyphicon glyphicon-eye-close\" aria-hidden=\"true\"></span>\r\n         </a>\r\n         <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Logout\" href=\"login.html\">\r\n            <span class=\"glyphicon glyphicon-off\" aria-hidden=\"true\"></span>\r\n         </a>\r\n      </div>\r\n      <!-- /menu footer buttons -->\r\n   </div>\r\n</div>"

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(27);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, ".nav-sm .nav.side-menu li a {\n  text-align: center !important;\n  font-weight: 400;\n  font-size: 10px;\n  padding: 10px 5px; }\n  .nav-sm .nav.side-menu li a.active, .nav-sm .nav.side-menu li a.active-sm {\n    border-right: 5px solid #1ABB9C; }\n  .nav-sm .nav.side-menu li a i {\n    font-size: 25px !important;\n    text-align: center;\n    width: 100% !important;\n    margin-bottom: 5px; }\n    .nav-sm .nav.side-menu li a i.toggle-up {\n      display: none !important; }\n\n.nav-sm .nav.side-menu li.active-sm ul ul {\n  position: static;\n  width: 200px;\n  background: none; }\n\n.nav-sm .nav.side-menu > li {\n  position: relative;\n  display: block;\n  cursor: pointer; }\n  .nav-sm .nav.side-menu > li > a {\n    margin-bottom: 6px;\n    color: #E7E7E7;\n    font-weight: 500; }\n    .nav-sm .nav.side-menu > li > a:hover {\n      color: #F2F5F7 !important; }\n    .nav-sm .nav.side-menu > li > a:hover, .nav-sm .nav.side-menu > li > a:focus {\n      text-decoration: none;\n      background: transparent; }\n  .nav-sm .nav.side-menu > li.current-page, .nav-sm .nav.side-menu > li.active {\n    border-right: 5px solid #1ABB9C; }\n    .nav-sm .nav.side-menu > li.current-page > a, .nav-sm .nav.side-menu > li.active > a {\n      text-shadow: rgba(0, 0, 0, 0.25) 0 -1px 0;\n      background: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #5b6479), color-stop(100%, #4c5566)), #686e78;\n      background: -webkit-linear-gradient(#334556, #2C4257), #2A3F54;\n      background: -moz-linear-gradient(#334556, #2C4257), #2A3F54;\n      background: -o-linear-gradient(#334556, #2C4257), #2A3F54;\n      background: linear-gradient(#334556, #2C4257), #2A3F54;\n      -webkit-box-shadow: rgba(0, 0, 0, 0.25) 0 1px 0, inset rgba(255, 255, 255, 0.16) 0 1px 0;\n      -moz-box-shadow: rgba(0, 0, 0, 0.25) 0 1px 0, inset rgba(255, 255, 255, 0.16) 0 1px 0;\n      box-shadow: rgba(0, 0, 0, 0.25) 0 1px 0, inset rgba(255, 255, 255, 0.16) 0 1px 0; }\n\n.nav-sm ul.nav.child_menu ul {\n  position: static;\n  width: 200px;\n  background: none; }\n\n.nav-sm > .nav.side-menu > li.active-sm > a {\n  color: #1ABB9C !important; }\n\n", ""]);
	
	// exports


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var TopMenuComponent = (function () {
	    function TopMenuComponent() {
	    }
	    return TopMenuComponent;
	}());
	TopMenuComponent = __decorate([
	    core_1.Component({
	        selector: 'top-menu',
	        template: __webpack_require__(29),
	        styles: [__webpack_require__(30)]
	    })
	], TopMenuComponent);
	exports.TopMenuComponent = TopMenuComponent;


/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "<!--<div class=\"top_nav\">\r\n   <div class=\"nav_menu\">\r\n      <nav>\r\n         <div class=\"nav toggle\">\r\n            <a id=\"menu_toggle\"><i class=\"fa fa-bars\"></i></a>\r\n         </div>\r\n         <ul class=\"nav navbar-nav navbar-right\">\r\n            <li class=\"\">\r\n               <a href=\"javascript:;\" class=\"user-profile dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                  <img src=\"~/images/user.png\" alt=\"\">Anonymous\r\n                  @*<span class=\"fa fa-angle-down\"></span>*@\r\n               </a>\r\n               @*<ul class=\"dropdown-menu dropdown-usermenu pull-right\">\r\n                  <li><a href=\"javascript:;\"> Profile</a></li>\r\n                  <li>\r\n                     <a href=\"javascript:;\">\r\n                        <span class=\"badge bg-red pull-right\">50%</span>\r\n                        <span>Settings</span>\r\n                     </a>\r\n                  </li>\r\n                  <li><a href=\"javascript:;\">Help</a></li>\r\n                  <li><a href=\"login.html\"><i class=\"fa fa-sign-out pull-right\"></i> Log Out</a></li>\r\n               </ul>*@\r\n            </li>\r\n            <vc:messages />\r\n         </ul>\r\n      </nav>\r\n   </div>\r\n</div>-->\r\n\r\n\r\n<div class='main-nav'>\r\n   <div class='navbar navbar-inverse'>\r\n      <div class='navbar-header'>\r\n         <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n            <span class='sr-only'>Toggle navigation</span>\r\n            <span class='icon-bar'></span>\r\n            <span class='icon-bar'></span>\r\n            <span class='icon-bar'></span>\r\n         </button>\r\n         <a class='navbar-brand' [routerLink]=\"['/home']\">Stratis.Bitcoin.Dashboard</a>\r\n      </div>\r\n      <div class='clearfix'></div>\r\n      <div class='navbar-collapse collapse'>\r\n         <ul class='nav navbar-nav'>\r\n            <li [routerLinkActive]=\"['link-active']\">\r\n               <a [routerLink]=\"['/home']\">\r\n                  <span class='glyphicon glyphicon-home'></span> Home\r\n               </a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['link-active']\">\r\n               <a [routerLink]=\"['/counter']\">\r\n                  <span class='glyphicon glyphicon-education'></span> Counter\r\n               </a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['link-active']\">\r\n               <a [routerLink]=\"['/fetch-data']\">\r\n                  <span class='glyphicon glyphicon-th-list'></span> Fetch data\r\n               </a>\r\n            </li>\r\n         </ul>\r\n      </div>\r\n   </div>\r\n</div>\r\n"

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(31);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, ".nav-sm .nav.side-menu li a {\n  text-align: center !important;\n  font-weight: 400;\n  font-size: 10px;\n  padding: 10px 5px; }\n  .nav-sm .nav.side-menu li a.active, .nav-sm .nav.side-menu li a.active-sm {\n    border-right: 5px solid #1ABB9C; }\n  .nav-sm .nav.side-menu li a i {\n    font-size: 25px !important;\n    text-align: center;\n    width: 100% !important;\n    margin-bottom: 5px; }\n    .nav-sm .nav.side-menu li a i.toggle-up {\n      display: none !important; }\n\n.nav-sm .nav.side-menu li.active-sm ul ul {\n  position: static;\n  width: 200px;\n  background: none; }\n\n.nav-sm .nav.side-menu > li {\n  position: relative;\n  display: block;\n  cursor: pointer; }\n  .nav-sm .nav.side-menu > li > a {\n    margin-bottom: 6px;\n    color: #E7E7E7;\n    font-weight: 500; }\n    .nav-sm .nav.side-menu > li > a:hover {\n      color: #F2F5F7 !important; }\n    .nav-sm .nav.side-menu > li > a:hover, .nav-sm .nav.side-menu > li > a:focus {\n      text-decoration: none;\n      background: transparent; }\n  .nav-sm .nav.side-menu > li.current-page, .nav-sm .nav.side-menu > li.active {\n    border-right: 5px solid #1ABB9C; }\n    .nav-sm .nav.side-menu > li.current-page > a, .nav-sm .nav.side-menu > li.active > a {\n      text-shadow: rgba(0, 0, 0, 0.25) 0 -1px 0;\n      background: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #5b6479), color-stop(100%, #4c5566)), #686e78;\n      background: -webkit-linear-gradient(#334556, #2C4257), #2A3F54;\n      background: -moz-linear-gradient(#334556, #2C4257), #2A3F54;\n      background: -o-linear-gradient(#334556, #2C4257), #2A3F54;\n      background: linear-gradient(#334556, #2C4257), #2A3F54;\n      -webkit-box-shadow: rgba(0, 0, 0, 0.25) 0 1px 0, inset rgba(255, 255, 255, 0.16) 0 1px 0;\n      -moz-box-shadow: rgba(0, 0, 0, 0.25) 0 1px 0, inset rgba(255, 255, 255, 0.16) 0 1px 0;\n      box-shadow: rgba(0, 0, 0, 0.25) 0 1px 0, inset rgba(255, 255, 255, 0.16) 0 1px 0; }\n\n.nav-sm ul.nav.child_menu ul {\n  position: static;\n  width: 200px;\n  background: none; }\n\n.nav-sm > .nav.side-menu > li.active-sm > a {\n  color: #1ABB9C !important; }\n\n", ""]);
	
	// exports


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var FooterComponent = (function () {
	    function FooterComponent() {
	    }
	    return FooterComponent;
	}());
	FooterComponent = __decorate([
	    core_1.Component({
	        selector: 'page-footer',
	        template: __webpack_require__(33)
	    })
	], FooterComponent);
	exports.FooterComponent = FooterComponent;


/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "<footer>\r\n   <div class=\"pull-right\">\r\n      Stratis Dashboard\r\n   </div>\r\n   <div class=\"clearfix\"></div>\r\n</footer>"

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2RiMWMwZTA0M2Y0MmQ3OGNjNmIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kZGMzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcz85ZjY0Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZXRjaGRhdGEvZmV0Y2hkYXRhLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2lkZW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcXVlcnlcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2lkZW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaWRlbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LmNzcz84YTkyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zaWRlbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdG9wbWVudS90b3AtbWVudS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RvcG1lbnUvdG9wLW1lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RvcG1lbnUvdG9wLW1lbnUuY29tcG9uZW50LmNzcz80ZjA0Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90b3BtZW51L3RvcC1tZW51LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0Esd0JBQXNDO0FBQ3RDLHdCQUFpQjtBQUNqQixxQ0FBK0M7QUFDL0MsbURBQXlEO0FBQ3pELDJDQUE2QztBQUU3QyxzQkFBYyxFQUFFLENBQUM7QUFDakIsS0FBTSxRQUFRLEdBQUcsd0NBQW1CLEVBQUUsQ0FBQztBQUV2QyxvQkFBeUIsTUFBVztLQUNoQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtTQUMvQixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzthQUNsQyxJQUFJLEVBQUUsMkJBQTJCO2FBQ2pDLFVBQVUsRUFBRTtpQkFDUixPQUFPLEVBQUUsR0FBRztpQkFDWixVQUFVLEVBQUUsTUFBTSxDQUFDLEdBQUc7aUJBQ3RC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QTtBQUNBLHdEQUF1RCxrQ0FBa0MscUJBQXFCLG9CQUFvQixzQkFBc0IsRUFBRSwrRUFBK0Usc0NBQXNDLEVBQUUsbUNBQW1DLGlDQUFpQyx5QkFBeUIsNkJBQTZCLHlCQUF5QixFQUFFLCtDQUErQyxpQ0FBaUMsRUFBRSwrQ0FBK0MscUJBQXFCLGlCQUFpQixxQkFBcUIsRUFBRSxpQ0FBaUMsdUJBQXVCLG1CQUFtQixvQkFBb0IsRUFBRSxxQ0FBcUMseUJBQXlCLHFCQUFxQix1QkFBdUIsRUFBRSw2Q0FBNkMsa0NBQWtDLEVBQUUsb0ZBQW9GLDhCQUE4QixnQ0FBZ0MsRUFBRSxrRkFBa0Ysc0NBQXNDLEVBQUUsNEZBQTRGLGtEQUFrRCw0SEFBNEgsdUVBQXVFLG9FQUFvRSxrRUFBa0UsK0RBQStELGlHQUFpRyw4RkFBOEYseUZBQXlGLEVBQUUsa0NBQWtDLHFCQUFxQixpQkFBaUIscUJBQXFCLEVBQUUsaURBQWlELDhCQUE4QixFQUFFOztBQUVobkU7Ozs7Ozs7Ozs7Ozs7OztBQ1BBLHFDQUEwQztBQVExQyxLQUFhLGVBQWU7S0FBNUI7S0FDQSxDQUFDO0tBQUQsc0JBQUM7QUFBRCxFQUFDO0FBRFksZ0JBQWU7S0FOM0IsZ0JBQVMsQ0FBQztTQUNSLFFBQVEsRUFBRSxhQUFhO1NBQ3ZCLFFBQVEsRUFBRSxtQkFBTyxDQUFDLEVBQXlCLENBQUM7TUFDOUMsQ0FBQztJQUdXLGVBQWUsQ0FDM0I7QUFEWSwyQ0FBZTs7Ozs7OztBQ1I1Qix1SiIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdkYjFjMGUwNDNmNDJkNzhjYzZiIiwiaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzJztcbmltcG9ydCAnem9uZS5qcyc7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm1Ob2RlRHluYW1pYyB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcblxuZW5hYmxlUHJvZE1vZGUoKTtcbmNvbnN0IHBsYXRmb3JtID0gcGxhdGZvcm1Ob2RlRHluYW1pYygpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zOiBhbnkpIDogUHJvbWlzZTx7IGh0bWw6IHN0cmluZywgZ2xvYmFscz86IGFueSB9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdFpvbmUgPSBab25lLmN1cnJlbnQuZm9yayh7XG4gICAgICAgICAgICBuYW1lOiAnYW5ndWxhci11bml2ZXJzYWwgcmVxdWVzdCcsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgYmFzZVVybDogJy8nLFxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmw6IHBhcmFtcy51cmwsXG4gICAgICAgICAgICAgICAgb3JpZ2luVXJsOiBwYXJhbXMub3JpZ2luLFxuICAgICAgICAgICAgICAgIHByZWJvb3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFJlbmRlciBqdXN0IHRoZSA8YXBwPiBjb21wb25lbnQgaW5zdGVhZCBvZiB3cmFwcGluZyBpdCBpbnNpZGUgYW4gZXh0cmEgSFRNTCBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC8vIFdhaXRpbmcgb24gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvdW5pdmVyc2FsL2lzc3Vlcy8zNDdcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogJzwhRE9DVFlQRSBodG1sPjxodG1sPjxoZWFkPjwvaGVhZD48Ym9keT48YXBwPjwvYXBwPjwvYm9keT48L2h0bWw+J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uSGFuZGxlRXJyb3I6IChwYXJlbnRab25lLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgbW9kdWxlLCByZWplY3QgdGhlIHdob2xlIG9wZXJhdGlvblxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXF1ZXN0Wm9uZS5ydW48UHJvbWlzZTxzdHJpbmc+PigoKSA9PiBwbGF0Zm9ybS5zZXJpYWxpemVNb2R1bGUoQXBwTW9kdWxlKSkudGhlbihodG1sID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBodG1sOiBodG1sIH0pO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6b25lLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiem9uZS5qc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50J1xuaW1wb3J0IHsgTmF2TWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGZXRjaERhdGFDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ291bnRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGVNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NpZGVtZW51L3NpZGUtbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9wTWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90b3BtZW51L3RvcC1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgTmF2TWVudUNvbXBvbmVudCxcbiAgICAgIFNpZGVNZW51Q29tcG9uZW50LFxuICAgICAgVG9wTWVudUNvbXBvbmVudCxcbiAgICAgIENvdW50ZXJDb21wb25lbnQsXG4gICAgICBGZXRjaERhdGFDb21wb25lbnQsXG4gICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgRm9vdGVyQ29tcG9uZW50XG4gICBdLFxuICAgaW1wb3J0czogW1xuICAgICAgVW5pdmVyc2FsTW9kdWxlLCAvLyBNdXN0IGJlIGZpcnN0IGltcG9ydC4gVGhpcyBhdXRvbWF0aWNhbGx5IGltcG9ydHMgQnJvd3Nlck1vZHVsZSwgSHR0cE1vZHVsZSwgYW5kIEpzb25wTW9kdWxlIHRvby5cbiAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtcbiAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdob21lJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiAgICAgICAgIHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcbiAgICAgICAgIHsgcGF0aDogJ2NvdW50ZXInLCBjb21wb25lbnQ6IENvdW50ZXJDb21wb25lbnQgfSxcbiAgICAgICAgIHsgcGF0aDogJ2ZldGNoLWRhdGEnLCBjb21wb25lbnQ6IEZldGNoRGF0YUNvbXBvbmVudCB9LFxuICAgICAgICAgeyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnaG9tZScgfVxuICAgICAgXSlcbiAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9hcHAubW9kdWxlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5odG1sJyksXG4gICBzdHlsZXM6IFtyZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICBuYW1lID0gJ1N0cmF0aXMuQml0Y29pbi5EYXNoYm9hcmQnO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS08ZGl2IGNsYXNzPSdjb250YWluZXItZmx1aWQnPlxcclxcbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTMnPlxcclxcbiAgICAgICAgICAgIDxuYXYtbWVudT48L25hdi1tZW51PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tOSBib2R5LWNvbnRlbnQnPlxcclxcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj4tLT5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgYm9keVxcXCI+XFxyXFxuICAgPGRpdiBjbGFzcz1cXFwibWFpbl9jb250YWluZXJcXFwiPlxcclxcbiAgICAgIDxzaWRlLW1lbnU+PC9zaWRlLW1lbnU+XFxyXFxuICAgICAgPHRvcC1tZW51PjwvdG9wLW1lbnU+XFxyXFxuXFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwicmlnaHRfY29sXFxcIiByb2xlPVxcXCJtYWluXFxcIj5cXHJcXG4gICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgPHBhZ2UtZm9vdGVyPjwvcGFnZS1mb290ZXI+XFxyXFxuICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCB0aGUgbmF2IG1lbnUgc3BhbnMgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi4gTGVhdmUgYSBzcGFjZSBmb3IgaXQuICovXFxuICAgIC5ib2R5LWNvbnRlbnQge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduYXYtbWVudScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbmF2bWVudS5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vbmF2bWVudS5jb21wb25lbnQuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIE5hdk1lbnVDb21wb25lbnQge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuPCEtLTxkaXYgY2xhc3M9XFxcInRvcF9uYXZcXFwiPlxcclxcbiAgIDxkaXYgY2xhc3M9XFxcIm5hdl9tZW51XFxcIj5cXHJcXG4gICAgICA8bmF2PlxcclxcbiAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdiB0b2dnbGVcXFwiPlxcclxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJtZW51X3RvZ2dsZVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWJhcnNcXFwiPjwvaT48L2E+XFxyXFxuICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICA8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ1c2VyLXByb2ZpbGUgZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwifi9pbWFnZXMvdXNlci5wbmdcXFwiIGFsdD1cXFwiXFxcIj5Bbm9ueW1vdXNcXHJcXG4gICAgICAgICAgICAgICAgICBAKjxzcGFuIGNsYXNzPVxcXCJmYSBmYS1hbmdsZS1kb3duXFxcIj48L3NwYW4+KkBcXHJcXG4gICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgQCo8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tdXNlcm1lbnUgcHVsbC1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCI+IFByb2ZpbGU8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmctcmVkIHB1bGwtcmlnaHRcXFwiPjUwJTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TZXR0aW5nczwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIj5IZWxwPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcImxvZ2luLmh0bWxcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1zaWduLW91dCBwdWxsLXJpZ2h0XFxcIj48L2k+IExvZyBPdXQ8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICA8L3VsPipAXFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8dmM6bWVzc2FnZXMgLz5cXHJcXG4gICAgICAgICA8L3VsPlxcclxcbiAgICAgIDwvbmF2PlxcclxcbiAgIDwvZGl2PlxcclxcbjwvZGl2Pi0tPlxcclxcblxcclxcblxcclxcbjxkaXYgY2xhc3M9J21haW4tbmF2Jz5cXHJcXG4gICAgPGRpdiBjbGFzcz0nbmF2YmFyIG5hdmJhci1pbnZlcnNlJz5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J25hdmJhci1oZWFkZXInPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nbmF2YmFyLXRvZ2dsZScgZGF0YS10b2dnbGU9J2NvbGxhcHNlJyBkYXRhLXRhcmdldD0nLm5hdmJhci1jb2xsYXBzZSc+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdzci1vbmx5Jz5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz0nbmF2YmFyLWJyYW5kJyBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+U3RyYXRpcy5CaXRjb2luLkRhc2hib2FyZDwvYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz0nY2xlYXJmaXgnPjwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlJz5cXHJcXG4gICAgICAgICAgICA8dWwgY2xhc3M9J25hdiBuYXZiYXItbmF2Jz5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1ob21lJz48L3NwYW4+IEhvbWVcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvY291bnRlciddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1lZHVjYXRpb24nPjwvc3Bhbj4gQ291bnRlclxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9mZXRjaC1kYXRhJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3QnPjwvc3Bhbj4gRmV0Y2ggZGF0YVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9uYXZtZW51LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJsaSAuZ2x5cGhpY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4vKiBIaWdobGlnaHRpbmcgcnVsZXMgZm9yIG5hdiBtZW51IGl0ZW1zICovXFxubGkubGluay1hY3RpdmUgYSxcXG5saS5saW5rLWFjdGl2ZSBhOmhvdmVyLFxcbmxpLmxpbmstYWN0aXZlIGE6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE4OUM3O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIEtlZXAgdGhlIG5hdiBtZW51IGluZGVwZW5kZW50IG9mIHNjcm9sbGluZyBhbmQgb24gdG9wIG9mIG90aGVyIGl0ZW1zICovXFxuLm1haW4tbmF2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLyogT24gc21hbGwgc2NyZWVucywgY29udmVydCB0aGUgbmF2IG1lbnUgdG8gYSB2ZXJ0aWNhbCBzaWRlYmFyICovXFxuICAgIC5tYWluLW5hdiB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogY2FsYygyNSUgLSAyMHB4KTtcXG4gICAgfVxcbiAgICAubmF2YmFyIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gICAgICAgIGJvcmRlci13aWR0aDogMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuICAgIC5uYXZiYXItaGVhZGVyIHtcXG4gICAgICAgIGZsb2F0OiBub25lO1xcbiAgICB9XFxuICAgIC5uYXZiYXItY29sbGFwc2Uge1xcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0NDQ7XFxuICAgICAgICBwYWRkaW5nOiAwcHg7XFxuICAgIH1cXG4gICAgLm5hdmJhciB1bCB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgfVxcbiAgICAubmF2YmFyIGxpIHtcXG4gICAgICAgIGZsb2F0OiBub25lO1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgbWFyZ2luOiA2cHg7XFxuICAgIH1cXG4gICAgLm5hdmJhciBsaSBhIHtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgfVxcbiAgICAubmF2YmFyIGEge1xcbiAgICAgICAgLyogSWYgYSBtZW51IGl0ZW0ncyB0ZXh0IGlzIHRvbyBsb25nLCB0cnVuY2F0ZSBpdCAqL1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdob21lJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ob21lLmNvbXBvbmVudC5odG1sJylcbn0pXG5cblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPkhlbGxvLCB3b3JsZCE8L2gxPlxcbjxwPldlbGNvbWUgdG8geW91ciBuZXcgc2luZ2xlLXBhZ2UgYXBwbGljYXRpb24sIGJ1aWx0IHdpdGg6PC9wPlxcbjx1bD5cXG4gICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vZ2V0LmFzcC5uZXQvJz5BU1AuTkVUIENvcmU8L2E+IGFuZCA8YSBocmVmPSdodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5LzY3ZWY4c2JkLmFzcHgnPkMjPC9hPiBmb3IgY3Jvc3MtcGxhdGZvcm0gc2VydmVyLXNpZGUgY29kZTwvbGk+XFxuICAgIDxsaT48YSBocmVmPSdodHRwczovL2FuZ3VsYXIuaW8vJz5Bbmd1bGFyIDI8L2E+IGFuZCA8YSBocmVmPSdodHRwOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy8nPlR5cGVTY3JpcHQ8L2E+IGZvciBjbGllbnQtc2lkZSBjb2RlPC9saT5cXG4gICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vd2VicGFjay5naXRodWIuaW8vJz5XZWJwYWNrPC9hPiBmb3IgYnVpbGRpbmcgYW5kIGJ1bmRsaW5nIGNsaWVudC1zaWRlIHJlc291cmNlczwvbGk+XFxuICAgIDxsaT48YSBocmVmPSdodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8nPkJvb3RzdHJhcDwvYT4gZm9yIGxheW91dCBhbmQgc3R5bGluZzwvbGk+XFxuPC91bD5cXG48cD5UbyBoZWxwIHlvdSBnZXQgc3RhcnRlZCwgd2UndmUgYWxzbyBzZXQgdXA6PC9wPlxcbjx1bD5cXG4gICAgPGxpPjxzdHJvbmc+Q2xpZW50LXNpZGUgbmF2aWdhdGlvbjwvc3Ryb25nPi4gRm9yIGV4YW1wbGUsIGNsaWNrIDxlbT5Db3VudGVyPC9lbT4gdGhlbiA8ZW0+QmFjazwvZW0+IHRvIHJldHVybiBoZXJlLjwvbGk+XFxuICAgIDxsaT48c3Ryb25nPlNlcnZlci1zaWRlIHByZXJlbmRlcmluZzwvc3Ryb25nPi4gRm9yIGZhc3RlciBpbml0aWFsIGxvYWRpbmcgYW5kIGltcHJvdmVkIFNFTywgeW91ciBBbmd1bGFyIDIgYXBwIGlzIHByZXJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIuIFRoZSByZXN1bHRpbmcgSFRNTCBpcyB0aGVuIHRyYW5zZmVycmVkIHRvIHRoZSBicm93c2VyIHdoZXJlIGEgY2xpZW50LXNpZGUgY29weSBvZiB0aGUgYXBwIHRha2VzIG92ZXIuPC9saT5cXG4gICAgPGxpPjxzdHJvbmc+V2VicGFjayBkZXYgbWlkZGxld2FyZTwvc3Ryb25nPi4gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdGhlcmUncyBubyBuZWVkIHRvIHJ1biB0aGUgPGNvZGU+d2VicGFjazwvY29kZT4gYnVpbGQgdG9vbC4gWW91ciBjbGllbnQtc2lkZSByZXNvdXJjZXMgYXJlIGR5bmFtaWNhbGx5IGJ1aWx0IG9uIGRlbWFuZC4gVXBkYXRlcyBhcmUgYXZhaWxhYmxlIGFzIHNvb24gYXMgeW91IG1vZGlmeSBhbnkgZmlsZS48L2xpPlxcbiAgICA8bGk+PHN0cm9uZz5Ib3QgbW9kdWxlIHJlcGxhY2VtZW50PC9zdHJvbmc+LiBJbiBkZXZlbG9wbWVudCBtb2RlLCB5b3UgZG9uJ3QgZXZlbiBuZWVkIHRvIHJlbG9hZCB0aGUgcGFnZSBhZnRlciBtYWtpbmcgbW9zdCBjaGFuZ2VzLiBXaXRoaW4gc2Vjb25kcyBvZiBzYXZpbmcgY2hhbmdlcyB0byBmaWxlcywgeW91ciBBbmd1bGFyIDIgYXBwIHdpbGwgYmUgcmVidWlsdCBhbmQgYSBuZXcgaW5zdGFuY2UgaW5qZWN0ZWQgaXMgaW50byB0aGUgcGFnZS48L2xpPlxcbiAgICA8bGk+PHN0cm9uZz5FZmZpY2llbnQgcHJvZHVjdGlvbiBidWlsZHM8L3N0cm9uZz4uIEluIHByb2R1Y3Rpb24gbW9kZSwgZGV2ZWxvcG1lbnQtdGltZSBmZWF0dXJlcyBhcmUgZGlzYWJsZWQsIGFuZCB0aGUgPGNvZGU+d2VicGFjazwvY29kZT4gYnVpbGQgdG9vbCBwcm9kdWNlcyBtaW5pZmllZCBzdGF0aWMgQ1NTIGFuZCBKYXZhU2NyaXB0IGZpbGVzLjwvbGk+XFxuPC91bD5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmV0Y2hkYXRhJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBGZXRjaERhdGFDb21wb25lbnQge1xuICAgIHB1YmxpYyBmb3JlY2FzdHM6IFdlYXRoZXJGb3JlY2FzdFtdO1xuXG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cCkge1xuICAgICAgICBodHRwLmdldCgnL2FwaS9TYW1wbGVEYXRhL1dlYXRoZXJGb3JlY2FzdHMnKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9yZWNhc3RzID0gcmVzdWx0Lmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgV2VhdGhlckZvcmVjYXN0IHtcbiAgICBkYXRlRm9ybWF0dGVkOiBzdHJpbmc7XG4gICAgdGVtcGVyYXR1cmVDOiBudW1iZXI7XG4gICAgdGVtcGVyYXR1cmVGOiBudW1iZXI7XG4gICAgc3VtbWFyeTogc3RyaW5nO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIlxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5XZWF0aGVyIGZvcmVjYXN0PC9oMT5cXG5cXG48cD5UaGlzIGNvbXBvbmVudCBkZW1vbnN0cmF0ZXMgZmV0Y2hpbmcgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuPC9wPlxcblxcbjxwICpuZ0lmPVxcXCIhZm9yZWNhc3RzXFxcIj48ZW0+TG9hZGluZy4uLjwvZW0+PC9wPlxcblxcbjx0YWJsZSBjbGFzcz0ndGFibGUnICpuZ0lmPVxcXCJmb3JlY2FzdHNcXFwiPlxcbiAgICA8dGhlYWQ+XFxuICAgICAgICA8dHI+XFxuICAgICAgICAgICAgPHRoPkRhdGU8L3RoPlxcbiAgICAgICAgICAgIDx0aD5UZW1wLiAoQyk8L3RoPlxcbiAgICAgICAgICAgIDx0aD5UZW1wLiAoRik8L3RoPlxcbiAgICAgICAgICAgIDx0aD5TdW1tYXJ5PC90aD5cXG4gICAgICAgIDwvdHI+XFxuICAgIDwvdGhlYWQ+XFxuICAgIDx0Ym9keT5cXG4gICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBmb3JlY2FzdCBvZiBmb3JlY2FzdHNcXFwiPlxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC5kYXRlRm9ybWF0dGVkIH19PC90ZD5cXG4gICAgICAgICAgICA8dGQ+e3sgZm9yZWNhc3QudGVtcGVyYXR1cmVDIH19PC90ZD5cXG4gICAgICAgICAgICA8dGQ+e3sgZm9yZWNhc3QudGVtcGVyYXR1cmVGIH19PC90ZD5cXG4gICAgICAgICAgICA8dGQ+e3sgZm9yZWNhc3Quc3VtbWFyeSB9fTwvdGQ+XFxuICAgICAgICA8L3RyPlxcbiAgICA8L3Rib2R5PlxcbjwvdGFibGU+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZXRjaGRhdGEvZmV0Y2hkYXRhLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb3VudGVyJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9jb3VudGVyLmNvbXBvbmVudC5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgQ291bnRlckNvbXBvbmVudCB7XG4gICAgcHVibGljIGN1cnJlbnRDb3VudCA9IDA7XG5cbiAgICBwdWJsaWMgaW5jcmVtZW50Q291bnRlcigpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Q291bnQrKztcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDI+Q291bnRlcjwvaDI+XFxuXFxuPHA+VGhpcyBpcyBhIHNpbXBsZSBleGFtcGxlIG9mIGFuIEFuZ3VsYXIgMiBjb21wb25lbnQuPC9wPlxcblxcbjxwPkN1cnJlbnQgY291bnQ6IDxzdHJvbmc+e3sgY3VycmVudENvdW50IH19PC9zdHJvbmc+PC9wPlxcblxcbjxidXR0b24gKGNsaWNrKT1cXFwiaW5jcmVtZW50Q291bnRlcigpXFxcIj5JbmNyZW1lbnQ8L2J1dHRvbj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICBzZWxlY3RvcjogJ3NpZGUtbWVudScsXHJcbiAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3NpZGUtbWVudS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICBzdHlsZXM6IFtyZXF1aXJlKCcuL3NpZGUtbWVudS5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlTWVudUNvbXBvbmVudCB7XHJcbiAgIHB1YmxpYyBpc0Rldk1vZGU6IGJvb2xlYW47XHJcbiAgIHByaXZhdGUgX2N1cnJlbnRVcmw6IHN0cmluZztcclxuICAgcHJpdmF0ZSBfJGJvZHk6IEpRdWVyeTtcclxuICAgcHJpdmF0ZSBfJG1lbnVUb2dnbGU6IEpRdWVyeTtcclxuICAgcHJpdmF0ZSBfJHNpZGViYXJNZW51OiBKUXVlcnk7XHJcbiAgIHByaXZhdGUgXyRzaWRlYmFyRm9vdGVyOiBKUXVlcnk7XHJcbiAgIHByaXZhdGUgXyRsZWZ0Q29sOiBKUXVlcnk7XHJcbiAgIHByaXZhdGUgXyRyaWdodENvbDogSlF1ZXJ5O1xyXG4gICBwcml2YXRlIF8kbmF2TWVudTogSlF1ZXJ5O1xyXG4gICBwcml2YXRlIF8kZm9vdGVyOiBKUXVlcnk7XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICB2YXIgZW52ID0gcHJvY2Vzcy5lbnYuQVNQTkVUX0VOViB8fCBcIkRldmVsb3BtZW50XCI7XHJcbiAgICAgIHRoaXMuaXNEZXZNb2RlID0gZW52ID09PSBcIkRldmVsb3BtZW50XCI7XHJcblxyXG4gICAgICB0aGlzLl8kYm9keSA9ICQoJ2JvZHknKTtcclxuICAgICAgdGhpcy5fJG1lbnVUb2dnbGUgPSAkKCcjbWVudV90b2dnbGUnKTtcclxuICAgICAgdGhpcy5fJHNpZGViYXJNZW51ID0gJCgnI3NpZGViYXItbWVudScpO1xyXG4gICAgICB0aGlzLl8kc2lkZWJhckZvb3RlciA9ICQoJy5zaWRlYmFyLWZvb3RlcicpO1xyXG4gICAgICB0aGlzLl8kbGVmdENvbCA9ICQoJy5sZWZ0X2NvbCcpO1xyXG4gICAgICB0aGlzLl8kcmlnaHRDb2wgPSAkKCcucmlnaHRfY29sJyk7XHJcbiAgICAgIHRoaXMuXyRuYXZNZW51ID0gJCgnLm5hdl9tZW51Jyk7XHJcbiAgICAgIHRoaXMuXyRmb290ZXIgPSAkKCdmb290ZXInKTtcclxuXHJcbiAgICAgIHRoaXMuX2N1cnJlbnRVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnIycpWzBdLnNwbGl0KCc/JylbMF07XHJcblxyXG4gICAgICB0aGlzLkluaXQoKTtcclxuICAgfVxyXG5cclxuXHJcbiAgIHByaXZhdGUgU2V0Q29udGVudEhlaWdodCgpIHtcclxuICAgICAgLy8gVE9ETzogVGhpcyBpcyBzb21lIGtpbmQgb2YgZWFzeSBmaXgsIG1heWJlIHdlIGNhbiBpbXByb3ZlIHRoaXNcclxuICAgICAgLy8gcmVzZXQgaGVpZ2h0XHJcbiAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICBpZiAod2luZG93ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICB0aGlzLl8kcmlnaHRDb2wuY3NzKCdtaW4taGVpZ2h0JywgJCh3aW5kb3cpLmhlaWdodCgpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGJvZHlIZWlnaHQgPSB0aGlzLl8kYm9keS5vdXRlckhlaWdodCgpLFxyXG4gICAgICAgICBmb290ZXJIZWlnaHQgPSB0aGlzLl8kYm9keS5oYXNDbGFzcygnZm9vdGVyX2ZpeGVkJykgPyAtMTAgOiB0aGlzLl8kZm9vdGVyLmhlaWdodCgpLFxyXG4gICAgICAgICBsZWZ0Q29sSGVpZ2h0ID0gdGhpcy5fJGxlZnRDb2wuZXEoMSkuaGVpZ2h0KCkgKyB0aGlzLl8kc2lkZWJhckZvb3Rlci5oZWlnaHQoKSxcclxuICAgICAgICAgY29udGVudEhlaWdodCA9IGJvZHlIZWlnaHQgPCBsZWZ0Q29sSGVpZ2h0ID8gbGVmdENvbEhlaWdodCA6IGJvZHlIZWlnaHQ7XHJcblxyXG4gICAgICAvLyBub3JtYWxpemUgY29udGVudFxyXG4gICAgICBjb250ZW50SGVpZ2h0IC09IHRoaXMuXyRuYXZNZW51LmhlaWdodCgpICsgZm9vdGVySGVpZ2h0O1xyXG5cclxuICAgICAgdGhpcy5fJHJpZ2h0Q29sLmNzcygnbWluLWhlaWdodCcsIGNvbnRlbnRIZWlnaHQpO1xyXG4gICB9XHJcblxyXG5cclxuXHJcbiAgIHB1YmxpYyBvbk1lbnVDbGljaygpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQgLSBzaWRlYmFyX21lbnUnKTtcclxuICAgICAgdmFyICRsaSA9ICQodGhpcykucGFyZW50KCk7XHJcblxyXG5cclxuICAgICAgaWYgKCRsaS5pcygnLmFjdGl2ZScpKSB7XHJcbiAgICAgICAgICRsaS5yZW1vdmVDbGFzcygnYWN0aXZlIGFjdGl2ZS1zbScpO1xyXG4gICAgICAgICAkKCd1bDpmaXJzdCcsICRsaSkuc2xpZGVVcCh0aGlzLlNldENvbnRlbnRIZWlnaHQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAvLyBwcmV2ZW50IGNsb3NpbmcgbWVudSBpZiB3ZSBhcmUgb24gY2hpbGQgbWVudVxyXG4gICAgICAgICBpZiAoISRsaS5wYXJlbnQoKS5pcygnLmNoaWxkX21lbnUnKSkge1xyXG4gICAgICAgICAgICB0aGlzLl8kc2lkZWJhck1lbnUuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlIGFjdGl2ZS1zbScpO1xyXG4gICAgICAgICAgICB0aGlzLl8kc2lkZWJhck1lbnUuZmluZCgnbGkgdWwnKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl8kYm9keS5pcyhcIi5uYXYtc21cIikpIHtcclxuICAgICAgICAgICAgICAgdGhpcy5fJHNpZGViYXJNZW51LmZpbmQoXCJsaVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZSBhY3RpdmUtc21cIik7XHJcbiAgICAgICAgICAgICAgIHRoaXMuXyRzaWRlYmFyTWVudS5maW5kKFwibGkgdWxcIikuc2xpZGVVcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgJGxpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICQoJ3VsOmZpcnN0JywgJGxpKS5zbGlkZURvd24odGhpcy5TZXRDb250ZW50SGVpZ2h0KTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgSW5pdCgpIHtcclxuICAgICAgdGhpcy5fJHNpZGViYXJNZW51LmZpbmQoJ2EnKS5vbignY2xpY2snLCB0aGlzLm9uTWVudUNsaWNrKTtcclxuXHJcbiAgICAgIC8vIHRvZ2dsZSBzbWFsbCBvciBsYXJnZSBtZW51IFxyXG4gICAgICB0aGlzLl8kbWVudVRvZ2dsZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkIC0gbWVudSB0b2dnbGUnKTtcclxuXHJcbiAgICAgICAgIGlmICh0aGlzLl8kYm9keS5oYXNDbGFzcygnbmF2LW1kJykpIHtcclxuICAgICAgICAgICAgdGhpcy5fJHNpZGViYXJNZW51LmZpbmQoJ2xpLmFjdGl2ZSB1bCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgdGhpcy5fJHNpZGViYXJNZW51LmZpbmQoJ2xpLmFjdGl2ZScpLmFkZENsYXNzKCdhY3RpdmUtc20nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuXyRzaWRlYmFyTWVudS5maW5kKCdsaS5hY3RpdmUtc20gdWwnKS5zaG93KCk7XHJcbiAgICAgICAgICAgIHRoaXMuXyRzaWRlYmFyTWVudS5maW5kKCdsaS5hY3RpdmUtc20nKS5hZGRDbGFzcygnYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1zbScpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICB0aGlzLl8kYm9keS50b2dnbGVDbGFzcygnbmF2LW1kIG5hdi1zbScpO1xyXG5cclxuICAgICAgICAgdGhpcy5TZXRDb250ZW50SGVpZ2h0KCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gY2hlY2sgYWN0aXZlIG1lbnVcclxuICAgICAgdGhpcy5fJHNpZGViYXJNZW51LmZpbmQoJ2FbaHJlZj1cIicgKyB0aGlzLl9jdXJyZW50VXJsICsgJ1wiXScpLnBhcmVudCgnbGknKS5hZGRDbGFzcygnY3VycmVudC1wYWdlJyk7XHJcblxyXG4gICAgICB0aGlzLl8kc2lkZWJhck1lbnUuZmluZCgnYScpLmZpbHRlcigoaW5kZXgsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgcmV0dXJuICg8SFRNTEFuY2hvckVsZW1lbnQ+ZWxlbWVudCkuaHJlZiA9PSB0aGlzLl9jdXJyZW50VXJsO1xyXG4gICAgICB9KVxyXG4gICAgICAgICAucGFyZW50KCdsaScpLmFkZENsYXNzKCdjdXJyZW50LXBhZ2UnKVxyXG4gICAgICAgICAucGFyZW50cygndWwnKS5zbGlkZURvd24odGhpcy5TZXRDb250ZW50SGVpZ2h0KVxyXG4gICAgICAgICAucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgLy8gcmVjb21wdXRlIGNvbnRlbnQgd2hlbiByZXNpemluZ1xyXG4gICAgICBpZiAod2luZG93ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAkKHdpbmRvdykuc21hcnRyZXNpemUodGhpcy5TZXRDb250ZW50SGVpZ2h0KCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLlNldENvbnRlbnRIZWlnaHQoKTtcclxuXHJcbiAgICAgIC8vIGZpeGVkIHNpZGViYXJcclxuICAgICAgaWYgKCQuZm4ubUN1c3RvbVNjcm9sbGJhcikge1xyXG4gICAgICAgICAkKCcubWVudV9maXhlZCcpLm1DdXN0b21TY3JvbGxiYXIoe1xyXG4gICAgICAgICAgICBhdXRvSGlkZVNjcm9sbGJhcjogdHJ1ZSxcclxuICAgICAgICAgICAgdGhlbWU6ICdtaW5pbWFsJyxcclxuICAgICAgICAgICAgbW91c2VXaGVlbDogeyBwcmV2ZW50RGVmYXVsdDogdHJ1ZSB9XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NpZGVtZW51L3NpZGUtbWVudS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqcXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbC1tZC0zIGxlZnRfY29sIG1lbnVfZml4ZWRcXFwiPlxcclxcbiAgIDxkaXYgY2xhc3M9XFxcImxlZnRfY29sIHNjcm9sbC12aWV3XFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJuYXZiYXIgbmF2X3RpdGxlXFxcIiBzdHlsZT1cXFwiYm9yZGVyOiAwO1xcXCI+XFxyXFxuICAgICAgICAgPGEgYXNwLWFyZWE9XFxcIlxcXCIgYXNwLWNvbnRyb2xsZXI9XFxcIkhvbWVcXFwiIGFzcC1hY3Rpb249XFxcIkluZGV4XFxcIiBjbGFzcz1cXFwic2l0ZV90aXRsZVxcXCI+U3RyYXRpcyBEYXNoYm9hcmQ8L2E+XFxyXFxuICAgICAgICAgPHAgKm5nSWY9XFxcImlzRGV2TW9kZVxcXCIgc3R5bGU9XFxcImNvbG9yOnJlZDt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tdG9wOi0xMHB4O1xcXCI+REVWRUxPUE1FTlQgQlVJTEQ8L3A+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2xlYXJmaXhcXFwiPjwvZGl2PlxcclxcbiAgICAgIDwhLS0gbWVudSBwcm9maWxlIHF1aWNrIGluZm8gLS0+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZmlsZSBjbGVhcmZpeFxcXCI+XFxyXFxuICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZmlsZV9waWNcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJpbWFnZXMvdXNlci5wbmdcXFwiIGFsdD1cXFwiLi4uXFxcIiBjbGFzcz1cXFwiaW1nLWNpcmNsZSBwcm9maWxlX2ltZ1xcXCI+XFxyXFxuICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZmlsZV9pbmZvXFxcIj5cXHJcXG4gICAgICAgICAgICA8c3Bhbj5XZWxjb21lLDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8aDI+QW5vbnltb3VzPC9oMj5cXHJcXG4gICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8IS0tIC9tZW51IHByb2ZpbGUgcXVpY2sgaW5mbyAtLT5cXHJcXG4gICAgICA8YnIgLz5cXHJcXG4gICAgICA8IS0tIHNpZGViYXIgbWVudSAtLT5cXHJcXG4gICAgICA8ZGl2IGlkPVxcXCJzaWRlYmFyLW1lbnVcXFwiIGNsYXNzPVxcXCJtYWluX21lbnVfc2lkZSBoaWRkZW4tcHJpbnQgbWFpbl9tZW51XFxcIj5cXHJcXG4gICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZW51X3NlY3Rpb25cXFwiPlxcclxcbiAgICAgICAgICAgIDxoMz5HZW5lcmFsPC9oMz5cXHJcXG4gICAgICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdiBzaWRlLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgIDxsaT5cXHJcXG4gICAgICAgICAgICAgICAgICA8YT48aSBjbGFzcz1cXFwiZmEgZmEtaG9tZVxcXCI+PC9pPiBIb21lIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1jaGV2cm9uLWRvd25cXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXYgY2hpbGRfbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgPGxpIGlzLWFjdGl2ZS1yb3V0ZSBhc3AtY29udHJvbGxlcj1cXFwiSG9tZVxcXCIgYXNwLWFjdGlvbj1cXFwiSW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGFzcC1jb250cm9sbGVyPVxcXCJIb21lXFxcIiBhc3AtYWN0aW9uPVxcXCJJbmRleFxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLWRhc2hib2FyZFxcXCI+PC9pPiBEYXNoYm9hcmQ8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICA8bGkgaXMtYWN0aXZlLXJvdXRlIGFzcC1jb250cm9sbGVyPVxcXCJIb21lXFxcIiBhc3AtYWN0aW9uPVxcXCJOb2RlU2V0dGluZ3NcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGFzcC1jb250cm9sbGVyPVxcXCJIb21lXFxcIiBhc3AtYWN0aW9uPVxcXCJOb2RlU2V0dGluZ3NcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS1jb2dcXFwiPjwvaT4gTm9kZSBTZXR0aW5nczwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwhLS0gL3NpZGViYXIgbWVudSAtLT5cXHJcXG4gICAgICA8IS0tIC9tZW51IGZvb3RlciBidXR0b25zIC0tPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNpZGViYXItZm9vdGVyIGhpZGRlbi1zbWFsbFxcXCI+XFxyXFxuICAgICAgICAgPGEgZGF0YS10b2dnbGU9XFxcInRvb2x0aXBcXFwiIGRhdGEtcGxhY2VtZW50PVxcXCJ0b3BcXFwiIHRpdGxlPVxcXCJTZXR0aW5nc1xcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tY29nXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICA8YSBkYXRhLXRvZ2dsZT1cXFwidG9vbHRpcFxcXCIgZGF0YS1wbGFjZW1lbnQ9XFxcInRvcFxcXCIgdGl0bGU9XFxcIkZ1bGxTY3JlZW5cXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWZ1bGxzY3JlZW5cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgIDxhIGRhdGEtdG9nZ2xlPVxcXCJ0b29sdGlwXFxcIiBkYXRhLXBsYWNlbWVudD1cXFwidG9wXFxcIiB0aXRsZT1cXFwiTG9ja1xcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZXllLWNsb3NlXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICA8YSBkYXRhLXRvZ2dsZT1cXFwidG9vbHRpcFxcXCIgZGF0YS1wbGFjZW1lbnQ9XFxcInRvcFxcXCIgdGl0bGU9XFxcIkxvZ291dFxcXCIgaHJlZj1cXFwibG9naW4uaHRtbFxcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tb2ZmXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgIDwvYT5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8IS0tIC9tZW51IGZvb3RlciBidXR0b25zIC0tPlxcclxcbiAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2lkZW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc2lkZS1tZW51LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NpZGVtZW51L3NpZGUtbWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubmF2LXNtIC5uYXYuc2lkZS1tZW51IGxpIGEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweCA1cHg7IH1cXG4gIC5uYXYtc20gLm5hdi5zaWRlLW1lbnUgbGkgYS5hY3RpdmUsIC5uYXYtc20gLm5hdi5zaWRlLW1lbnUgbGkgYS5hY3RpdmUtc20ge1xcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjMUFCQjlDOyB9XFxuICAubmF2LXNtIC5uYXYuc2lkZS1tZW51IGxpIGEgaSB7XFxuICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDsgfVxcbiAgICAubmF2LXNtIC5uYXYuc2lkZS1tZW51IGxpIGEgaS50b2dnbGUtdXAge1xcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcblxcbi5uYXYtc20gLm5hdi5zaWRlLW1lbnUgbGkuYWN0aXZlLXNtIHVsIHVsIHtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxuICB3aWR0aDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kOiBub25lOyB9XFxuXFxuLm5hdi1zbSAubmF2LnNpZGUtbWVudSA+IGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAubmF2LXNtIC5uYXYuc2lkZS1tZW51ID4gbGkgPiBhIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbiAgICBjb2xvcjogI0U3RTdFNztcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDsgfVxcbiAgICAubmF2LXNtIC5uYXYuc2lkZS1tZW51ID4gbGkgPiBhOmhvdmVyIHtcXG4gICAgICBjb2xvcjogI0YyRjVGNyAhaW1wb3J0YW50OyB9XFxuICAgIC5uYXYtc20gLm5hdi5zaWRlLW1lbnUgPiBsaSA+IGE6aG92ZXIsIC5uYXYtc20gLm5hdi5zaWRlLW1lbnUgPiBsaSA+IGE6Zm9jdXMge1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxcbiAgLm5hdi1zbSAubmF2LnNpZGUtbWVudSA+IGxpLmN1cnJlbnQtcGFnZSwgLm5hdi1zbSAubmF2LnNpZGUtbWVudSA+IGxpLmFjdGl2ZSB7XFxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICMxQUJCOUM7IH1cXG4gICAgLm5hdi1zbSAubmF2LnNpZGUtbWVudSA+IGxpLmN1cnJlbnQtcGFnZSA+IGEsIC5uYXYtc20gLm5hdi5zaWRlLW1lbnUgPiBsaS5hY3RpdmUgPiBhIHtcXG4gICAgICB0ZXh0LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwIC0xcHggMDtcXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgNTAlIDAlLCA1MCUgMTAwJSwgY29sb3Itc3RvcCgwJSwgIzViNjQ3OSksIGNvbG9yLXN0b3AoMTAwJSwgIzRjNTU2NikpLCAjNjg2ZTc4O1xcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCMzMzQ1NTYsICMyQzQyNTcpLCAjMkEzRjU0O1xcbiAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCMzMzQ1NTYsICMyQzQyNTcpLCAjMkEzRjU0O1xcbiAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgjMzM0NTU2LCAjMkM0MjU3KSwgIzJBM0Y1NDtcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzMzNDU1NiwgIzJDNDI1NyksICMyQTNGNTQ7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDAgMXB4IDAsIGluc2V0IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNikgMCAxcHggMDtcXG4gICAgICAtbW96LWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCAxcHggMCwgaW5zZXQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE2KSAwIDFweCAwO1xcbiAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCAxcHggMCwgaW5zZXQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE2KSAwIDFweCAwOyB9XFxuXFxuLm5hdi1zbSB1bC5uYXYuY2hpbGRfbWVudSB1bCB7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYmFja2dyb3VuZDogbm9uZTsgfVxcblxcbi5uYXYtc20gPiAubmF2LnNpZGUtbWVudSA+IGxpLmFjdGl2ZS1zbSA+IGEge1xcbiAgY29sb3I6ICMxQUJCOUMgIWltcG9ydGFudDsgfVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NpZGVtZW51L3NpZGUtbWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3RvcC1tZW51JyxcbiAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RvcC1tZW51LmNvbXBvbmVudC5odG1sJyksXG4gICBzdHlsZXM6IFtyZXF1aXJlKCcuL3RvcC1tZW51LmNvbXBvbmVudC5jc3MnKV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBUb3BNZW51Q29tcG9uZW50IHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90b3BtZW51L3RvcC1tZW51LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tPGRpdiBjbGFzcz1cXFwidG9wX25hdlxcXCI+XFxyXFxuICAgPGRpdiBjbGFzcz1cXFwibmF2X21lbnVcXFwiPlxcclxcbiAgICAgIDxuYXY+XFxyXFxuICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF2IHRvZ2dsZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgaWQ9XFxcIm1lbnVfdG9nZ2xlXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtYmFyc1xcXCI+PC9pPjwvYT5cXHJcXG4gICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJcXFwiPlxcclxcbiAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInVzZXItcHJvZmlsZSBkcm9wZG93bi10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJ+L2ltYWdlcy91c2VyLnBuZ1xcXCIgYWx0PVxcXCJcXFwiPkFub255bW91c1xcclxcbiAgICAgICAgICAgICAgICAgIEAqPHNwYW4gY2xhc3M9XFxcImZhIGZhLWFuZ2xlLWRvd25cXFwiPjwvc3Bhbj4qQFxcclxcbiAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICBAKjx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudSBkcm9wZG93bi11c2VybWVudSBwdWxsLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIj4gUHJvZmlsZTwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgIDxsaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiZy1yZWQgcHVsbC1yaWdodFxcXCI+NTAlPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNldHRpbmdzPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiPkhlbHA8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwibG9naW4uaHRtbFxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXNpZ24tb3V0IHB1bGwtcmlnaHRcXFwiPjwvaT4gTG9nIE91dDwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgIDwvdWw+KkBcXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDx2YzptZXNzYWdlcyAvPlxcclxcbiAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgPC9uYXY+XFxyXFxuICAgPC9kaXY+XFxyXFxuPC9kaXY+LS0+XFxyXFxuXFxyXFxuXFxyXFxuPGRpdiBjbGFzcz0nbWFpbi1uYXYnPlxcclxcbiAgIDxkaXYgY2xhc3M9J25hdmJhciBuYXZiYXItaW52ZXJzZSc+XFxyXFxuICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyLWhlYWRlcic+XFxyXFxuICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSduYXZiYXItdG9nZ2xlJyBkYXRhLXRvZ2dsZT0nY29sbGFwc2UnIGRhdGEtdGFyZ2V0PScubmF2YmFyLWNvbGxhcHNlJz5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nc3Itb25seSc+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxyXFxuICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgPGEgY2xhc3M9J25hdmJhci1icmFuZCcgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiPlN0cmF0aXMuQml0Y29pbi5EYXNoYm9hcmQ8L2E+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz0nY2xlYXJmaXgnPjwvZGl2PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9J25hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSc+XFxyXFxuICAgICAgICAgPHVsIGNsYXNzPSduYXYgbmF2YmFyLW5hdic+XFxyXFxuICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24taG9tZSc+PC9zcGFuPiBIb21lXFxyXFxuICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2NvdW50ZXInXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tZWR1Y2F0aW9uJz48L3NwYW4+IENvdW50ZXJcXHJcXG4gICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvZmV0Y2gtZGF0YSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi10aC1saXN0Jz48L3NwYW4+IEZldGNoIGRhdGFcXHJcXG4gICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICA8L3VsPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdG9wbWVudS90b3AtbWVudS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3RvcC1tZW51LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3RvcG1lbnUvdG9wLW1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm5hdi1zbSAubmF2LnNpZGUtbWVudSBsaSBhIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHggNXB4OyB9XFxuICAubmF2LXNtIC5uYXYuc2lkZS1tZW51IGxpIGEuYWN0aXZlLCAubmF2LXNtIC5uYXYuc2lkZS1tZW51IGxpIGEuYWN0aXZlLXNtIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgIzFBQkI5QzsgfVxcbiAgLm5hdi1zbSAubmF2LnNpZGUtbWVudSBsaSBhIGkge1xcbiAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cXG4gICAgLm5hdi1zbSAubmF2LnNpZGUtbWVudSBsaSBhIGkudG9nZ2xlLXVwIHtcXG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cXG5cXG4ubmF2LXNtIC5uYXYuc2lkZS1tZW51IGxpLmFjdGl2ZS1zbSB1bCB1bCB7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYmFja2dyb3VuZDogbm9uZTsgfVxcblxcbi5uYXYtc20gLm5hdi5zaWRlLW1lbnUgPiBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLm5hdi1zbSAubmF2LnNpZGUtbWVudSA+IGxpID4gYSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcXG4gICAgY29sb3I6ICNFN0U3RTc7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cXG4gICAgLm5hdi1zbSAubmF2LnNpZGUtbWVudSA+IGxpID4gYTpob3ZlciB7XFxuICAgICAgY29sb3I6ICNGMkY1RjcgIWltcG9ydGFudDsgfVxcbiAgICAubmF2LXNtIC5uYXYuc2lkZS1tZW51ID4gbGkgPiBhOmhvdmVyLCAubmF2LXNtIC5uYXYuc2lkZS1tZW51ID4gbGkgPiBhOmZvY3VzIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cXG4gIC5uYXYtc20gLm5hdi5zaWRlLW1lbnUgPiBsaS5jdXJyZW50LXBhZ2UsIC5uYXYtc20gLm5hdi5zaWRlLW1lbnUgPiBsaS5hY3RpdmUge1xcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjMUFCQjlDOyB9XFxuICAgIC5uYXYtc20gLm5hdi5zaWRlLW1lbnUgPiBsaS5jdXJyZW50LXBhZ2UgPiBhLCAubmF2LXNtIC5uYXYuc2lkZS1tZW51ID4gbGkuYWN0aXZlID4gYSB7XFxuICAgICAgdGV4dC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCAtMXB4IDA7XFxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDUwJSAwJSwgNTAlIDEwMCUsIGNvbG9yLXN0b3AoMCUsICM1YjY0NzkpLCBjb2xvci1zdG9wKDEwMCUsICM0YzU1NjYpKSwgIzY4NmU3ODtcXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjMzM0NTU2LCAjMkM0MjU3KSwgIzJBM0Y1NDtcXG4gICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgjMzM0NTU2LCAjMkM0MjU3KSwgIzJBM0Y1NDtcXG4gICAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoIzMzNDU1NiwgIzJDNDI1NyksICMyQTNGNTQ7XFxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMzMzQ1NTYsICMyQzQyNTcpLCAjMkEzRjU0O1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwIDFweCAwLCBpbnNldCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYpIDAgMXB4IDA7XFxuICAgICAgLW1vei1ib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDAgMXB4IDAsIGluc2V0IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNikgMCAxcHggMDtcXG4gICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDAgMXB4IDAsIGluc2V0IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNikgMCAxcHggMDsgfVxcblxcbi5uYXYtc20gdWwubmF2LmNoaWxkX21lbnUgdWwge1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7IH1cXG5cXG4ubmF2LXNtID4gLm5hdi5zaWRlLW1lbnUgPiBsaS5hY3RpdmUtc20gPiBhIHtcXG4gIGNvbG9yOiAjMUFCQjlDICFpbXBvcnRhbnQ7IH1cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy90b3BtZW51L3RvcC1tZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAncGFnZS1mb290ZXInLFxuICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZm9vdGVyLmNvbXBvbmVudC5odG1sJylcbn0pXG5cblxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvb3Rlcj5cXHJcXG4gICA8ZGl2IGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5cXHJcXG4gICAgICBTdHJhdGlzIERhc2hib2FyZFxcclxcbiAgIDwvZGl2PlxcclxcbiAgIDxkaXYgY2xhc3M9XFxcImNsZWFyZml4XFxcIj48L2Rpdj5cXHJcXG48L2Zvb3Rlcj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=