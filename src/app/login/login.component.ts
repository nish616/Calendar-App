import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name : string;
  email : string;
  password : string;

  constructor(private _auth: AuthService, private router : Router) { }

  ngOnInit(): void {
    
  }

  toggleButton : boolean = false;
  response : any;
  errorMessage : any;

  onToggle(){
    this.name="";
    this.email="";
    this.password="";
    this.toggleButton = !this.toggleButton;
  }
  

  register(formData:any){
   this._auth.registerUser(formData)
   .subscribe(
     (response) => {
      console.log(response);
      localStorage.setItem('auth-token', response.token)
      this.router.navigate(['/calendar']);
     },
     (error) => {
      console.log(error);
      alert(error.error.mesg);
     }
    )
   
  }

  login(formData:any){
    this._auth.loginUser(formData)
   .subscribe(
     (response) => {
      console.log(response);
      localStorage.setItem('auth-token', response.token)
      this.router.navigate(['/calendar']);
     },
     (error) => {
      console.log(error);
      alert(error.error.mesg);
     }
    )
  }

}
