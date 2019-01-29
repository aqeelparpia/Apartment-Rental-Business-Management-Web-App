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
import { AccountDetailsComponentComponent } from './account-details-component/account-details-component.component';
import { ChatappComponentComponent } from './chatapp-component/chatapp-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ViewWorkOrderComponentComponent } from './view-work-order-component/view-work-order-component.component';
import { AddWorkOrderComponent } from './add-work-order/add-work-order.component';
import { UpdateWorkOrderComponent } from './update-work-order/update-work-order.component';

const routes: Routes = [
{ path: 'home', component: HomeComponentComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full'},
{ path: 'about', component: AboutComponentComponent },
{ path: 'login', component: LoginComponentComponent},
{ path: 'register', component: RegisterComponentComponent},
{ path: 'faq', component: FaqComponentComponent},
{ path: 'contact', component: ContactComponentComponent},
{ path: 'forgotPass', component: ForgotPassComponentComponent},
{ path: 'forgotUser', component: ForgotuserComponentComponent},
{ path: 'workOrder', component: WorkorderComponentComponent},
{ path: 'account', component: AccountDetailsComponentComponent},
{ path: 'chatApp', component: ChatappComponentComponent},
{path: 'viewWorkOrder', component: ViewWorkOrderComponentComponent},
{path: 'addWorkOrder', component: AddWorkOrderComponent},
{path: 'updateWorkOrder', component: UpdateWorkOrderComponent},
{ path: '**', component: NotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

