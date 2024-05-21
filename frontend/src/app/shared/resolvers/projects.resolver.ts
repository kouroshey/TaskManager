import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ApiService } from '../services/api.service'
import { Observable, catchError, map, take } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProjectResolver implements Resolve<any> {

  constructor(private api: ApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.api.post('', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('Token')}`
      }
    }).pipe(
      take(1),
      map(data => {
        return data;
      }), catchError((error): any => {
        console.log(error);
      })
    );
  }
}

