import { Component } from '@angular/core';
import { EmployeeDataService } from '../services/employee-data.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css'],
})
export class AddemployeeComponent {
  submitted: boolean = false;
  employee: any;

  addEmpForm!: FormGroup;
  constructor(
    private userService: EmployeeDataService,
    private route: ActivatedRoute,
    private router: Router,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.userService.getSelectedEmp().subscribe((employee) => {
      this.employee = employee;
      this.initialiForm();
    });

    this.route.params.subscribe((params) => {
      const id = params['id'];
    });
  }
  showAddButton: boolean = true;

  initialiForm(): void {
    if (this.employee) {
      this.showAddButton = true;

      this.addEmpForm = this.formbuilder.group({
        empid: [this.employee.empid, Validators.required],
        name: [this.employee.name, Validators.required],
        email: [this.employee.email, Validators.required],
        phone: [this.employee.phone, Validators.required],
        aadhar: [this.employee.aadhar, Validators.required],
        age: [this.employee.age, Validators.required],
        position: [this.employee.position, Validators.required],
        gender: [this.employee.gender, Validators.required],
        bggrp: [this.employee.gender, Validators.required],
        jDate: [this.employee.jDate, Validators.required],
        etype: [this.employee.etype, Validators.required],
        address: [this.employee.address, Validators.required],
        country: [this.employee.country, Validators.required],
        state: [this.employee.state, Validators.required],
        city: [this.employee.city, Validators.required],
      });
    } else {
      this.showAddButton = false;

      // Initialize the form with empty values or default values
      this.addEmpForm = this.formbuilder.group({
        empid: ['', Validators.required],
        name: ['', Validators.required],
        email: ['', Validators.required],
        phone: ['', Validators.required],
        aadhar: ['', Validators.required],
        age: ['', Validators.required],
        position: ['', Validators.required],
        gender: ['', Validators.required],
        bggrp: ['', Validators.required],
        jDate: ['', Validators.required],
        etype: ['', Validators.required],
        address: ['', Validators.required],
        country: ['', Validators.required],
        state: ['', Validators.required],
        city: ['', Validators.required],
      });
    }
  }
  

  onUpdate(): void {
    debugger;
    const FormValue = this.addEmpForm.value;

    this.userService
      .updateUserData(this.employee.id, FormValue)
      .subscribe((result) => {
        console.log(result);
        alert('Employee updated Successfully');
      });
  }

  SaveUserData() {
    const FormValue = this.addEmpForm.value;
    this.submitted = true;
    if (this.addEmpForm.valid) {
      this.userService.saveUserData(FormValue).subscribe((result) => {
        console.log(result);
        alert('Employee Added Successfully');
        this.router.navigate(['/welcome']);
      });
    }
  }
}
