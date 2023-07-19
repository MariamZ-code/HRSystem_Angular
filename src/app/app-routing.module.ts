import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './Comonents/employees/employees.component';
import { AddEmployeeComponent } from './Comonents/add-employee/add-employee.component';
import { SettingComponent } from './Comonents/settings/setting.component';
import { LoginComponent } from './Comonents/login/login.component';
import { DashboardComponent } from './Comonents/dashboard/dashboard.component';
import { AttendanceComponent } from './Comonents/attendance/attendance.component';
import { HolidaysComponent } from './Comonents/holidays/holidays.component';
import { EditAttendLeaveTimeComponent } from './Comonents/edit-attend-leave-time/edit-attend-leave-time.component';
import { EmpsalaryComponent } from './Comonents/empsalary/empsalary.component';
import { NewadminComponent } from './Comonents/newadmin/newadmin.component';
import { AddGroupsComponent } from './Comonents/add-groups/add-groups.component';

const routes: Routes = [
  //{path:'',component:ContentComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:NewadminComponent},
  {path:'AddGroup',component:AddGroupsComponent},
  {path:'attendance',component:AttendanceComponent},
  {path:'attendance/:id/edit',component:EditAttendLeaveTimeComponent},
  {path:'holidays',component:HolidaysComponent},
  {path:'holidays/:id/edit',component:HolidaysComponent},
  //{path:'',component:LoginComponent},
  {path:'Dashboard',component:DashboardComponent},
  {path:'report',component:EmpsalaryComponent},
  {path:'settings',component:SettingComponent},
  {path:'settings/:id/edit',component:SettingComponent},
  {path:'Employees',component:EmployeesComponent},
  {path:'Employees/:id/edit',component:AddEmployeeComponent},

  //{path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
