import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersListService } from './users-list.service';
import { User } from './users-list.model';
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

	constructor(public usersListService: UsersListService, private router: Router) { }

	ngOnInit() {
		this.usersListService.getUsersList()
			.subscribe((data) => this.users = data.results);
	}

	saveUserData(uuid: string) {
		this.usersListService.setUserDetails(this.users.filter(function (el) {
			return el.login.uuid === uuid;
		})[0])
		this.goToDetails(uuid);
	}

	goToDetails(uuid: string) {
		this.router.navigate(["/userslist", uuid]);
	}

}
