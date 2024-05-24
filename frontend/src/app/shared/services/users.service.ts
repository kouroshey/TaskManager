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
  
  baseUrl="http://192.168.10.167";

  
  public getAllUsers(params: {}):Observable<UserPagination>{
    return this.http.post<UserPagination>(this.baseUrl+"/api/user/get-all",params,{headers: {
        'Authorization': `Bearer ${localStorage.getItem('Token')}`
      }})
  }
  

  
  
}


