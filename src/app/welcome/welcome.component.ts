import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDataService } from '../services/employee-data.service';


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
          this.userKeys = Object.keys(this.user[0]).filter(key => key !== 'id'); // Exclude "_id" from keys
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
}
