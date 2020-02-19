import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { UsersListRoutingModule } from './users-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UsersListRoutingModule
  ],
  declarations: [
    UsersListComponent
  ]
})
export class UsersListModule { 

}
