import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  private selectedEmployeeSubject = new BehaviorSubject<any>(null);
  // selectedEmployee$ = this.selectedEmployeeSubject.asObservable();
  user:any [] = [];
  private url = "http://localhost:3000/posts"
  constructor(private http:HttpClient) { }

  setSelectedUser(employee: any):void{
    
    this.selectedEmployeeSubject.next(employee);
  }
  getSelectedEmp(): Observable<any>{
    
    return this.selectedEmployeeSubject.asObservable();
  }


  getUserData(): Observable<any>{
    return this.http.get(this.url);
  }

  saveUserData(data: any){
    return this.http.post(this.url,data);
  }

  updateUserData(id: any,data: any): Observable<any>{
    debugger
    const url =`${this.url}/${id}`;
    return this.http.put(url, data);
  }



  deleteUserData (bookid:any):Observable<number>{
   
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json');
    let options={
      headers:httpheaders
    };
    return this.http.delete<number>(this.url+"/"+bookid);
  }



}
