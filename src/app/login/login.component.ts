import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  toggleButton : boolean = false;
  onToggle(){
    this.toggleButton = !this.toggleButton;
  }

  onSubmit(formData:any){
    console.log(formData);
    
  }


}
