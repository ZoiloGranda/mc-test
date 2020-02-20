import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { UsersListService } from '../users-list.service';
import { User } from '../users-list.model';

@Component({
  selector: 'ng-e-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
 user:User;

  constructor(public usersListService: UsersListService) { }

  ngOnInit() {
   this.user = this.usersListService.getUserDetails();
  }

}
