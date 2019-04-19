import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeHomepageComponent} from '../app/components/employee-homepage/employee-homepage.component';
import {EmployeeLoginComponent}from '../app/components/employee-login/employee-login.component';
import { CoverPageComponent } from './components/cover-page/cover-page.component';
import { ManagerHomepageComponent } from './components/manager-homepage/manager-homepage.component';
import { ManagerLoginComponent } from './components/manager-login/manager-login.component';
import { EmployeeRequestComponent } from '../app/components/employee-request/employee-request.component';
import { ManagerApprovalComponent } from './components/manager-approval/manager-approval.component';


const routes: Routes = [
  {
    path:'',
    component: CoverPageComponent
  },

{
  path: 'ehomepage',
  component: EmployeeHomepageComponent
}, 
{ 
  path: 'elogin',
  component: EmployeeLoginComponent
},
{
  path: 'request',
  component: EmployeeRequestComponent
},
{
  path: 'mhomepage',
  component: ManagerHomepageComponent
},
{
  path: 'mlogin',
  component: ManagerLoginComponent
},
{
  path: 'mapproval',
  component: ManagerApprovalComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
