import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { ToastrService } from 'ngx-toastr';
import { LoginserviceService } from 'src/app/Services/loginservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb:FormBuilder ,private  service:LoginserviceService , private toaster:ToastrService ){} 
  Loginform !:  FormGroup
  ngOnInit(): void {
    this.createform()
  }
  createform(){
    this.Loginform =this.fb.group({
      email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required,Validators.minLength(3)]]
    })
  }
  get getEmail() {
    return this.Loginform.controls['email'];
  }
  get getPassword() {
    return this.Loginform.controls['Password'];

  }
  login(){
   this.service.login(this.Loginform.value).subscribe((res:any)=>{ 
    localStorage.setItem("token", res.token)
    this.toaster.success("success","login success")
    // console.log("res",res);
    // console.log("jsonfile= ",atob(res.token))
    console.log(JSON.parse(atob(''+localStorage.getItem('token')?.split('.')[1])) )}, error=>{
      this.toaster.error("failed","tryagain")
    }
   )
    console.log(this.Loginform.value)
  }
  

  LogIn(e:Event){
  e.preventDefault()
 
  }
}
