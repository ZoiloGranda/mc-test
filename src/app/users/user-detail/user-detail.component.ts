import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { UsersService } from '../users.service';
import { User } from '../users.model';

@Component({
  selector: 'ng-e-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
 user:User;

  constructor(public usersService: UsersService) { }

  ngOnInit() {
   this.user = this.usersService.getUserDetails();
  }

}
