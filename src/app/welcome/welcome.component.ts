import { Component, EventEmitter, Output } from '@angular/core';
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
    
      // userService.getUserData().subscribe((data) => {
      //   data;

        this.userService.getEmpDetails().subscribe((res:any)  => {
          this.user = res.Data

        if (this.user.length > 0) {
          // Get keys from the first item assuming all items have the same structure
          this.userKeys = Object.keys(this.user[0]); 
        }
      })
  }

  alluser: any;

  ngOnInit(): void {
    
    // const localData = localStorage.getItem('allRegUser');
    // if (localData != null) {
    //   this.alluser = JSON.parse(localData);
    //   this.alluser.email;
    // }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }


  DeleteData(userD:any){
    alert("Are you sure you want to delete this entry?")

      this.userService.deleteUserData(userD.id).subscribe((result) => {
        console.log(result);
        alert("User Deleted Successfulyy");
        window.location.reload();
      })
      
  }


  UpdateData(userD: any) :void{
 
    this.userService.setSelectedUser(userD);
    this.router.navigate(['/addemployee',userD.id]);
  }

  onLogout(){
    alert("Do you want to Logout!");
    this.router.navigate(['/login']);
  }

}
