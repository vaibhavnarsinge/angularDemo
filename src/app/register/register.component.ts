import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDataService } from '../services/employee-data.service';

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
    phone:'',
    email:'',
    password: ''
  };
  loginform!: FormGroup;
  submitted: boolean = false;

  constructor(
    private userService: EmployeeDataService,
    private route: ActivatedRoute,
    private router: Router,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {

    this.loginform = this.formbuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8)]],
    });
  }

  OnSubmit(){
    debugger
    this.userService.setRegisterDetails(this.loginobj).subscribe((res:any)  => {
      debugger
      this.submitted = true;
      if (res.Success == 1) {
        alert('Email Already Exists');
      }
      else if(res.Success == 2) {
        alert('Phone No. Already Exists');
      }
      else if(res.Success == true) {
        alert('Register Successfully');
        this.router.navigate(['/login']);
      }
      else{
        alert('Invalid Details ');
      }
    })

  }

}
