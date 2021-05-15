import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from "./auth.guard";

import { AuthService} from "./auth.service";
import { CalendarService } from "./calendar.service";
import { TokenIntercepterService } from "./token-intercepter.service";

/* For calender */
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoComponent } from './demo/demo.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DemoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [
    AuthService,
    CalendarService,
    AuthGuard, 
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenIntercepterService,
      multi : true
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
