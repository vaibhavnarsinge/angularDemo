import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDataService } from '../services/employee-data.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  isSidebarOpen: boolean = true;

  user:any;
  constructor(private route: ActivatedRoute, private router: Router, private userService:EmployeeDataService ) {
      userService.getUserData().subscribe((data) => {
        this.user = data;
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
