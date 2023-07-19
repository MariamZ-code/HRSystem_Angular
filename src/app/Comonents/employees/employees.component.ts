import { EmployeeService } from 'src/app/Services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit{
  Employees:any;
  constructor(private employeeService:EmployeeService){
  
  // this.Employees=this.employeeService.getAllEmployee().subscribe({
  //   next:(response)=>{
  //     this.Employees=response;
      
  //   },
  //   error:(myError)=>{}
  // })
  }
  ngOnInit(): void {
    this.Employees=this.employeeService.getAllEmployee().subscribe({
      next:(response)=>{
        this.Employees=response;
        
      },
      error:(myError)=>{}
    })
  }
  // OnInit() {
  //   this.Employees=this.employeeService.getAllEmployee().subscribe({
  //     next:(response)=>{
  //       this.Employees=response;
        
  //     },
  //     error:(myError)=>{}
  //   })
  // }
  
    deleteProductHandler(employeeId:number){
      this.employeeService.deleteEmployee(employeeId).subscribe({
        next:(response)=>{
          this.Employees=this.Employees.filter((employee:any)=> employee.id != employeeId)
        }
      })
    }
}
