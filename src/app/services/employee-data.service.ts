import { ErrorHandler, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  private selectedEmployeeSubject = new BehaviorSubject<any>(null);
  // selectedEmployee$ = this.selectedEmployeeSubject.asObservable();
  user:any [] = [];
  private url = "http://localhost:3000/posts"
    httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient,private http:HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, Content-Type, Accept, Authorization, X-Request-With",
      "preflightContinue": "false"
    })
  }


  setSelectedUser(employee: any):void{
    
    this.selectedEmployeeSubject.next(employee);
  }
  getSelectedEmp(): Observable<any>{
    
    return this.selectedEmployeeSubject.asObservable();
  }
  getLoginDetails(data:any ) //get all category from server
  {
    return this.httpClient.get("http://localhost:8060/api/login?username="+ data.user + "&password=" + data.password, this.httpOptions)
      .pipe(
        retry(1)
      )
  }

  getEmpDetails() //get all category from server
  {
    return this.httpClient.get("http://localhost:8060/api/getemp",this.httpOptions)
      .pipe(
        retry(1)
      )
  }

  setRegisterDetails(data:any){

    return this.httpClient.post("http://localhost:8060/api/register", data, this.httpOptions)
      .pipe(
        retry(1)
      )
  }

  // getLoginDetails(data:any): Observable<any>{
  //   debugger
  //   return this.httpClient.get("http://localhost:8060/api/login?username="+ data.user + "&password=" + data.password);
  // }

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
