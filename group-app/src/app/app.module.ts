import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppContentComponent } from './app-content/app-content.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AppContentComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponentComponent,
    ContactComponentComponent,
    AboutComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
