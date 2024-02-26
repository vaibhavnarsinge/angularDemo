import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Input() item = '';
  show = 'amol';
  color = 'blue';
  list: string[] = ['Rohit', 'Sagar', 'Amol'];

  users = [
    {
      name: 'amol',
      age: 23,
      email: 'amol@gmail.com',
      account: ['facebook', 'Twiter', 'linkedin'],
    },
    {
      name: 'rahul',
      age: 21,
      email: 'rahul@gmail.com',
      account: ['facebook', 'Twiter', 'linkedin'],
    },
    {
      name: 'sagar',
      age: 22,
      email: 'sagar@gmail.com',
      account: ['facebook', 'Twiter', 'linkedin'],
    },
  ];
  name = 'amol';
  disable = false;
  data: any;

  getcolor(colorr: any) {
    this.color = colorr;
  }

  gettitle() {
    alert('this is button alert');
  }

  getName(name: any) {
    alert(name);
    console.log(name);
  }

  getname(name: any) {
    console.log(name);
  }

  getname1(name: any) {
    console.log(name);
  }
  getname2(name: any) {
    console.log(name);
  }
}
