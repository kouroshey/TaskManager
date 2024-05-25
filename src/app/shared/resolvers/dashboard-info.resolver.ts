import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable({ providedIn: 'root' })
export class GetDashboardInfoResolver implements Resolve<any> {
    constructor(private api: ApiService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
        return this.api.get('/api/admin-home/get-dashboard-info', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('Token')}`
            }
        })
    }
}