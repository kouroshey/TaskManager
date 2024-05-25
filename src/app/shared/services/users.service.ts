import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../model/user.model";
import {UserPagination} from "../model/user.pagination.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
      private http: HttpClient
  ) { }
  
  baseUrl="https://task.mahdimazaheri.com";

  
  public getAllUsers(params: {}):Observable<UserPagination>{
    return this.http.post<UserPagination>(this.baseUrl+"/api/user/get-all",params,{headers: {
        'Authorization': `Bearer ${localStorage.getItem('Token')}`
      }})
  }

  public getUser(id:number):Observable<IUser>{
    return this.http.get<IUser>(this.baseUrl+"/api/user/get/"+id,{headers: {
      'Authorization': `Bearer ${localStorage.getItem('Token')}`
    }})
  }

  public addUser(params:{}):Observable<any>{
   try{
    return this.http.post<any>(this.baseUrl+'/api/user/create',params,{headers: {
      'Authorization': `Bearer ${localStorage.getItem('Token')}`
    }})
   }
   catch (e){
    console.log('error adduser',e)
   }
  }
  

  
  
}


