import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CanActivateRouteGuard } from './can-activate-route.guard';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [
    UsersListComponent,
    UserDetailComponent
  ],
  providers: [CanActivateRouteGuard ]
})
export class UsersModule { 

}
