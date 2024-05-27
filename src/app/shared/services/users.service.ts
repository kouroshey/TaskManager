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
    return this.http.post<UserPagination>(this.baseUrl+"/api/user/get-all",params)
  }

  public getUser(id:number):Observable<IUser>{
    return this.http.get<IUser>(this.baseUrl+"/api/user/get/"+id)
  }

  public addUser(user:{}){
   try{
    return this.http.post(this.baseUrl+'/api/user/create',user)
   }
   catch (e){
    console.log('error adduser',e)
   }
  }

  public getMaster():Observable<IUser>{

    return this.http.get<IUser>(this.baseUrl+'/api/authentication/get-master')

  }


  public UpdateUserInfo(param:{}):Observable<any>
  {
    return this.http.post(this.baseUrl+'/api/user/edit',param)
  }

  public UpdateUserPassword(param:{}):Observable<any>
  {
    return this.http.post(this.baseUrl+'/api/user/change-password',param)
  }

  

  
  
}


