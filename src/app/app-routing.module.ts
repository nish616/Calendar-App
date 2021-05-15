import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { DemoComponent } from "./demo/demo.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {path: '', redirectTo :"calendar", pathMatch: "full"},
  {path: "login", component : LoginComponent},
  {path: "calendar", component : DemoComponent, canActivate : [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
