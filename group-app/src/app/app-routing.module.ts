import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from "./home-component/home-component.component";
import { ContactComponentComponent } from './contact-component/contact-component.component';

const routes: Routes = [
{ path: 'home', component: HomeComponentComponent },
{ path: '', component: HomeComponentComponent },
{ path: 'contact', component: ContactComponentComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

