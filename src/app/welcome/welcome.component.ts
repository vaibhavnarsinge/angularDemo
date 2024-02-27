import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDataService } from '../services/employee-data.service';
import { ResourceLoader } from '@angular/compiler';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  userKeys: string[] = [];
  isSidebarOpen: boolean = true;

  user:any;
  constructor(private route: ActivatedRoute, private router: Router, private userService:EmployeeDataService ) {
      userService.getUserData().subscribe((data) => {
        this.user = data;

        if (this.user.length > 0) {
          // Get keys from the first item assuming all items have the same structure
          this.userKeys = Object.keys(this.user[0]).filter(key => key !== 'id'); 
        }
      })
  }

  alluser: any;

  ngOnInit(): void {
    const localData = localStorage.getItem('allRegUser');
    if (localData != null) {
      this.alluser = JSON.parse(localData);
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // UpdateDate(){
  //     this.userService.saveUserData(this.addEmpForm.value).subscribe((result) =>{
  //       console.log(result);
  //     });
  //     alert("Employee Added Sucessfully")
  // }

  DeleteData(userD:any){
    debugger
      this.userService.deleteUserData(userD.id).subscribe((result) => {
        console.log(result);
        alert("User Deleted Successfulyy");
        window.location.reload();
      })
      
  }
  // UpdateData(userD:any){
  //   debugger
  //     this.userService.deleteUserData(userD.id).subscribe((result) => {
  //       console.log(result);
  //       alert("User Deleted Successfulyy");
  //       window.location.reload();
  //     })
      
  // }
}
