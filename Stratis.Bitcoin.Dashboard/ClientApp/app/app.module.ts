import { NgModule } from '@angular/core';
import { WindowRef } from './services/window-ref';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { SideMenuComponent } from './components/sidemenu/side-menu.component';
import { TopMenuComponent } from './components/topmenu/top-menu.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
   bootstrap: [AppComponent],
   providers: [WindowRef],
   declarations: [
      AppComponent,
      NavMenuComponent,
      SideMenuComponent,
      TopMenuComponent,
      CounterComponent,
      FetchDataComponent,
      HomeComponent,
      FooterComponent
   ],
   imports: [
      UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
      RouterModule.forRoot([
         { path: '', redirectTo: 'home', pathMatch: 'full' },
         { path: 'home', component: HomeComponent },
         { path: 'counter', component: CounterComponent },
         { path: 'fetch-data', component: FetchDataComponent },
         { path: '**', redirectTo: 'home' }
      ])
   ]
})

export class AppModule {
}
