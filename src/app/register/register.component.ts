import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  alluser: any;

  allRegUser: any[] = [];
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
    this.loginform = this.formbuilder.group({
      name: ['', [Validators.required]],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  OnSubmit() {
    this.submitted = true;

    if (this.loginform.invalid) {
      return;
    }
    alert("Register successfull");

    
    this.allRegUser.push(this.loginobj);
    localStorage.setItem('allRegUser',JSON.stringify(this.loginobj)); 
    console.log(this.loginform.value);
  }

  // deleteData() {
  //   localStorage.removeItem('allRegUser');
  //   this.allRegUser = [];
  // }
}
