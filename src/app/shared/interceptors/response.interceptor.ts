import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { EMPTY, Observable, catchError, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class ResponseInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem("Token")
        if (token) {
            req = req.clone({
                headers: req.headers.set(
                    "Token",
                    token
                ),
                url: req.url
            });
        }

        return next.handle(req).pipe(
            catchError(error => {
                if (error.status === 401) {
                    this.router.navigate(['/login']);
                    return EMPTY
                }
                return throwError(() => new Error(error));
            })
        );
    }
}
