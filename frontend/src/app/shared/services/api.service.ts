import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private baseUrl = "http://192.168.10.167"

  constructor(
    private http: HttpClient
  ) { }

  // GET METHOD
  get(endPoint: string, headers?: {}) {
    return this.http.get(`${this.baseUrl}${endPoint}`, headers)
  }

  // POST METHOD
  post(endPoint: string, params: {}) {
    return this.http.post(`${this.baseUrl}${endPoint}`, params)
  }

}
