import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeHomepageComponent} from '../app/components/employee-homepage/employee-homepage.component';
import {EmployeeLoginComponent}from '../app/components/employee-login/employee-login.component';
import { CoverPageComponent } from './components/cover-page/cover-page.component';


const routes: Routes = [
  {
    path:'',
    component: CoverPageComponent
  },

{
  path: 'homepage',
  component: EmployeeHomepageComponent
}, 
{ 
  path: 'login',
  component: EmployeeLoginComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
