import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { EmployeeLoginComponent } from './components/employee-login/employee-login.component';
import { EmployeeHomepageComponent } from './components/employee-homepage/employee-homepage.component';
import { CoverPageComponent } from './components/cover-page/cover-page.component';
import { ManagerHomepageComponent } from './components/manager-homepage/manager-homepage.component';
import { ManagerLoginComponent } from './components/manager-login/manager-login.component';
import { EmployeeRequestComponent } from './components/employee-request/employee-request.component';
import { ManagerApprovalComponent } from './components/manager-approval/manager-approval.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EmployeeLoginComponent,
    EmployeeHomepageComponent,
    CoverPageComponent,
    ManagerHomepageComponent,
    ManagerLoginComponent,
    EmployeeRequestComponent,
    ManagerApprovalComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
