import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

export const StrongPasswordRegx: RegExp =
  /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;
@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css'],
})
export class LoginAppComponent {
  alluser: any;

  loginobj: any = {
    user: '',
    password: '',
  };

  loginform!: FormGroup;
  submitted: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    debugger
    this.loginform = this.formbuilder.group({
      user: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    const localData = localStorage.getItem('allRegUser');
    if (localData != null) {
      this.alluser = JSON.parse(localData);
    }
  }

  OnSubmit() {
    if (
      this.loginobj.user == this.alluser.email &&
      this.loginobj.password == this.alluser.password
    ) 
    {
      this.submitted = true;
      alert('Login successfull');
      this.router.navigate(['/welcome']);
    } else {
      alert('invalid details');
    }

    if (this.loginform.invalid) {
      alert("Please Enter Credintials")
      return;
      
    }
  }
}
