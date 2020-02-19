import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersListComponent } from "./users-list.component";
console.log(UsersListComponent);

const routes: Routes = [
  {path: '',component: UsersListComponent},
  {path: '/list',component: UsersListComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsersListRoutingModule { }