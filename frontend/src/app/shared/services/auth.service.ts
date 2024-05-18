import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ApiService } from './api.service'

import { Iuser } from '../../shared/model/user.model'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AuthService implements OnInit {
  currentPath: string;
  user: Iuser;

  constructor(
    private root: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentPath = this.root.snapshot.url[0].path
  }

  login(params: {
    username: string;
    password: string;
  }): Observable<any> {
    try {
      return this.api.post('/api/authentication/login', {
        "username": params.username,
        "password": params.password,
      });
    } catch (error) {
      console.log('Error:', error);
      throw error;
    }
  }

  logout() {
    localStorage.removeItem('Token')
    this.router.navigate(['/login'])
  }
}
