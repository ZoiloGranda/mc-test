import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './users-list.model';

@Injectable()
export class UsersListService {
	private params = 'results=20&inc=name,email,phone,login,location,picture'
	private url = 'https://randomuser.me/api/?'
	private userDetails: User;
	private hasUserSaved: boolean = false;

	constructor(private http: HttpClient) { }

	getUsersList() {
		return this.http.get<{ results: User[] }>(this.url + this.params)
	}

	setUserDetails(user) {
		this.userDetails = user;
		this.hasUserSaved = true;
	}

	getUserDetails() {
		return this.userDetails;
	}

	getHasUserSaved() {
		return this.hasUserSaved;
	}
}
