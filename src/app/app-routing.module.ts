import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { ToDoListComponent} from "./to-do-list/to-do-list.component";

const routes : Routes = [];
// const routes: Routes = [
//   {path: "login", component : LoginComponent},
//   {path : "todo", component : ToDoListComponent}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
