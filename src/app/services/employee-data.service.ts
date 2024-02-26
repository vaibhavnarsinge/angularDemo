import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
   url = "http://localhost:3000/posts"
  constructor(private http:HttpClient) { }

  getUserData(){
    return this.http.get(this.url);
  }

  saveUserData(data:any){
    return this.http.post(this.url,data);
  }
}
