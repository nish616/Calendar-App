import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/register";
  private _loginUrl = "http://localhost:3000/login";

  constructor(private http : HttpClient) {

   }

   registerUser(data: any){
    return this.http.post<any>(this._registerUrl,data);
   }

   loginUser(data : any){
    return this.http.post<any>(this._loginUrl,data);
   }

   isLoggedIn(){
     return !!localStorage.getItem('auth-token');
   }

   getToken(){
     return localStorage.getItem('auth-token');
   }
}
