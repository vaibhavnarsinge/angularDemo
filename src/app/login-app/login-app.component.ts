import { Component,OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
export const StrongPasswordRegx: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;
@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css']
})

export class LoginAppComponent {
  alluser:any;

  allUser:any [] = [];
  loginobj:any = {
    user:'',
    password:''
  };

  loginform !: FormGroup;
  submitted:boolean = false;

constructor(private formbuilder:FormBuilder){}


ngOnInit():void{
    this.loginform = this.formbuilder.group ({
  
      user:['',[Validators.required,Validators.email]],
      password: ['',Validators.required]
    })
   

    const localData = localStorage.getItem('allUser');
    if(localData != null){
      this.alluser = JSON.parse(localData);
    }
    }


    OnSubmit(){
    this.submitted = true;

    if (this.loginform.invalid){
      return;
    }
    alert("Login successfull");

   
    localStorage.setItem('allUser',JSON.stringify(this.loginobj)); 
    console.log(this.loginform.value);
  }

  deletedata(){
    localStorage.removeItem('allUser');
    window.location.reload();
  }

}
