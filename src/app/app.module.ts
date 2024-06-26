import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// custom directives
import { NumericInputDirective } from './shared/directives/numeric-input.directive';

// guards
import { LoginGuard } from "./shared/guard/login-guard";
// // for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
// // for Router import:
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
// // for Core import:
import { LoadingBarModule } from '@ngx-loading-bar/core';


import { AppComponent } from './app.component';

import { OverlayModule } from '@angular/cdk/overlay';
import { ToastrModule } from 'ngx-toastr';
import { ProjectPagesModule } from "./components/project-pages/project-pages.module";
import { ResponseInterceptor } from './shared/interceptors/response.interceptor';
import { AuthInterceptor } from './shared/resolvers/AuthInterceptor.resolver';

@NgModule({
  declarations: [
    AppComponent,
    NumericInputDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    OverlayModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    //     // for HttpClient use:
    LoadingBarHttpClientModule,
    //     // for Router use:
    LoadingBarRouterModule,
    //     // for Core use:
    LoadingBarModule,

    ProjectPagesModule


  ],
  bootstrap: [AppComponent],
  providers: [
    LoginGuard, SharedModule,
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
    // { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
  ]
})
export class AppModule { }
