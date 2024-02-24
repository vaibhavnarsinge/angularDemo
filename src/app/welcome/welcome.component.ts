import { Component } from '@angular/core';
import * as jsonData from '../../assets/data.json';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  jsonData: any[] = jsonData;
  isSidebarOpen: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router){}

  alluser:any;

  ngOnInit():void{
   

    const localData = localStorage.getItem('allRegUser');
    if(localData != null){
      this.alluser = JSON.parse(localData);
    }
}

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
