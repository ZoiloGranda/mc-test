import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Subscription } from 'rxjs';
import { AppService } from "../../services/app.service";

@Component({
	selector: 'ng-e-app-header',
	templateUrl: './app-header.component.html',
	styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
	private loginStatusSub: Subscription;
	user: User = {
		firstName: 'Ahsan',
		lastName: 'Ayaz'
	};
	isLoggedIn: boolean = false;
	constructor(public appService: AppService) { }

	ngOnInit() {
		this.loginStatusSub = this.appService.getLoginStatusListener().subscribe(
			loginStatus => {
				this.isLoggedIn = loginStatus
			}
		)
	}

	/**
	 * @author Ahsan Ayaz
	 * @desc Logs the user in
	 */
	login() {
		this.appService.setLoginStatusListener(true)
	}

	/**
	 * @author Ahsan Ayaz
	 * @desc Logs the user in
	 */
	signup() {
		this.appService.setLoginStatusListener(true)
	}

	/**
	 * @author Ahsan Ayaz
	 * @desc Logs the user out
	 */
	logout() {
		this.appService.setLoginStatusListener(false)
	}

}
