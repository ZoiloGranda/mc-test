import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { UsersListRoutingModule } from './users-list-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CanActivateRouteGuard } from './can-activate-route.guard';

@NgModule({
  imports: [
    CommonModule,
    UsersListRoutingModule
  ],
  declarations: [
    UsersListComponent,
    UserDetailComponent
  ],
  providers: [CanActivateRouteGuard ]
})
export class UsersListModule { 

}
