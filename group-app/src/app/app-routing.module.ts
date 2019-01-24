import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from "./home-component/home-component.component";
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { FaqComponentComponent } from './faq-component/faq-component.component';
import { ForgotuserComponentComponent } from './forgotuser-component/forgotuser-component.component';
import { ForgotPassComponentComponent } from './forgot-pass-component/forgot-pass-component.component';
import { WorkorderComponentComponent } from './workorder-component/workorder-component.component';

const routes: Routes = [
{ path: 'home', component: HomeComponentComponent },
{ path: '', component: HomeComponentComponent },
{ path: 'about', component: AboutComponentComponent },
{ path: 'login', component: LoginComponentComponent},
{ path: 'register', component: RegisterComponentComponent},
{ path: 'faq', component: FaqComponentComponent},
{ path: 'contact', component: ContactComponentComponent},
{ path: 'forgotPass', component: ForgotPassComponentComponent},
{ path: 'forgotUser', component: ForgotuserComponentComponent},
{ path: 'workOrder', component: WorkorderComponentComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

