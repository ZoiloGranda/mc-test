import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../services/users.service';
import { User } from '../models/users.model';
import { Router } from '@angular/router';

@Component({
	selector: 'ng-e-users-list',
	templateUrl: './users-list.component.html',
	styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
	tableHeaders = [
		'First Name',
		'Last Name',
		'Email',
		'Phone'
	]
	users: User[];

	constructor(public usersService: UsersService, private router: Router) { }

	ngOnInit() {
		this.usersService.getUsersList()
			.subscribe((data) => this.users = data.results);
	}

	saveUserData(uuid: string) {
		this.usersService.setUserDetails(this.users.filter(function (el) {
			return el.login.uuid === uuid;
		})[0])
		this.goToDetails(uuid);
	}

	goToDetails(uuid: string) {
		this.router.navigate(["/userslist", uuid]);
	}

}
