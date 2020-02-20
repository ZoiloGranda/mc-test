import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersListComponent } from "./users-list/users-list.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { CanActivateRouteGuard } from './can-activate-route.guard';

const routes: Routes = [
  {path: '',component: UsersListComponent},
  {path: ':id',component: UserDetailComponent,canActivate: [CanActivateRouteGuard]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule { }