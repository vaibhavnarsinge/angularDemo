import { Component } from '@angular/core';
import { EmployeeDataService } from '../services/employee-data.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})


export class AddemployeeComponent {


  submitted: boolean = false;

  addEmpForm!: FormGroup;
    constructor( private userService:EmployeeDataService,  private formbuilder: FormBuilder ) {
      
    }

    ngOnInit(): void {
      this.addEmpForm = this.formbuilder.group({
        empid: ['', [Validators.required]],
        name: ['', Validators.required],
        email: ['', Validators.required],
        phone: ['', Validators.required],
        aadhar: ['', Validators.required],
        position: ['', Validators.required],
        gender: ['', Validators.required],
        jDate: ['', Validators.required],
        etype: ['', Validators.required],
        address: ['', Validators.required],
        country: ['', Validators.required],
        state: ['', Validators.required],
        city: ['', Validators.required]
      });
    }

  SaveUserData(addEmpForm:any){
    debugger
    this.userService.saveUserData(this.addEmpForm.value).subscribe((result) =>{
      console.log(result);
    });
    alert("Employee Added Sucessfully")
  }
}
