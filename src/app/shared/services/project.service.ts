import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProject } from '../model/project.model';
import { Observable } from 'rxjs';
import { runInThisContext } from 'vm';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) {

   }



   baseUrl="https://task.mahdimazaheri.com";

  
  public getAllProject():Observable<{Projects:IProject[],success:boolean}>{
    return this.http.get<{Projects:IProject[],success:boolean}>(this.baseUrl+"/api/project/get-all")
  }

  public AddProject(param:{}):Observable<any>{
    return this.http.post(this.baseUrl+"/api/project/create",param)
  }


  public getProject(id:number):Observable<any>
    {
        return this.http.get(this.baseUrl+'/api/project/get/'+id)
    }
  
}
