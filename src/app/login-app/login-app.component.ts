import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDataService } from '../services/employee-data.service';

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
    private userService: EmployeeDataService,
    private route: ActivatedRoute,
    private router: Router,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
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
    debugger 
    this.userService.getLoginDetails(this.loginobj).subscribe((res:any)  => {
      this.submitted = true;
      if (res.Success == true) {
        alert('Login successfull');
        this.router.navigate(['/welcome']);
      }
      else if(res.Success == false) {
        alert('Invalid Login ');
      }
      else{
        return;
      }
    });
  }
}



















//   OnSubmit() {
//     if (
//       this.loginobj.user == this.alluser.email &&
//       this.loginobj.password == this.alluser.password
//     )
//     {
//       this.submitted = true;
//       alert('Login successfull');
//       this.router.navigate(['/welcome']);
//     }
//     else if (this.loginform.invalid) {
//       alert("Please Enter Credintials")
//       return;
//     }
//     else {
//       alert('invalid details');
//     }
//   }
// }
