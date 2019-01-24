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
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { WorkorderComponentComponent } from './workorder-component/workorder-component.component';
import { ChatappComponentComponent } from './chatapp-component/chatapp-component.component';
import { ForgotuserComponentComponent } from './forgotuser-component/forgotuser-component.component';
import { ForgotPassComponentComponent } from './forgot-pass-component/forgot-pass-component.component';
import { AccountDetailsComponentComponent } from './account-details-component/account-details-component.component';
import { ViewWorkOrderComponentComponent } from './view-work-order-component/view-work-order-component.component';
import { FaqComponentComponent } from './faq-component/faq-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AppContentComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponentComponent,
    ContactComponentComponent,
    AboutComponentComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    WorkorderComponentComponent,
    ChatappComponentComponent,
    ForgotuserComponentComponent,
    ForgotPassComponentComponent,
    AccountDetailsComponentComponent,
    ViewWorkOrderComponentComponent,
    FaqComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
