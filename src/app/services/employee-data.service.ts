import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

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

  updateUserData(data:any){
    return this.http.put(this.url,data);
  }

  // deleteUserData(id:any){
  //   debugger
  //   return this.http.delete(this.url,id);
  // }

  deleteUserData (bookid:any):Observable<number>{
    debugger
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json');
    let options={
      headers:httpheaders
    };
    return this.http.delete<number>(this.url+"/"+bookid);
  }

//   updateUser(user: any) {
//     const userIndex = this.userList.findIndex(x => x.id == user.id);
//     if (userIndex != null && userIndex != undefined) {
//         this.userList[userIndex] = user;
//     }
// }


}
