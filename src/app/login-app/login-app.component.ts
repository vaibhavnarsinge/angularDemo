import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
export const StrongPasswordRegx: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;
@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css']
})

export class LoginAppComponent {


isSubmit:boolean = false;

alluser:any [] = [];
loginform = new FormGroup({
  
    user:new FormControl('',),
    password:new FormControl('',)
  })

  ngOnInit():void{

    const localData = localStorage.getItem('alluser');
    if(localData != null){
      this.alluser = JSON.parse(localData);
    }
    }

  submitForm(){
    this.isSubmit = true;
    if (this.loginform.invalid){
      return;
    }
    console.log(this.loginform.value);
  }


  loginobj:any = {
    user:'',
    password:''
  };

  add(){
    this.alluser.push(this.loginobj);
    localStorage.setItem('alluser',JSON.stringify(this.alluser));
    this.loginobj = {
      user:'',
      password:''
    }
  }

  deletedata(){
    localStorage.removeItem('alluser')
  }

}
