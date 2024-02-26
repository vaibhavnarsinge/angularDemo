import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  alluser:any;

  allRegUser:any [] = [];
  loginobj:any = {
    user:'',
    password:''
  };
  loginform !: FormGroup;
  submitted:boolean = false;

constructor(private formbuilder:FormBuilder){}



ngOnInit():void{
  this.loginform = this.formbuilder.group ({

    name:['',[Validators.required]],
    phone:['',Validators.required],
    email:['',Validators.required],
    password: ['',Validators.required]
  })


  const localData = localStorage.getItem('allRegUser');
    if(localData != null){
      this.alluser = JSON.parse(localData);
    }
    }


    OnSubmit(){
    this.submitted = true;

    if (this.loginform.invalid){
      return;
    }
    alert("Register successfull");

    
    this.allRegUser.push(this.loginobj);
    localStorage.setItem('allRegUser',JSON.stringify(this.allRegUser)); 
    console.log(this.loginform.value);
  }

}
