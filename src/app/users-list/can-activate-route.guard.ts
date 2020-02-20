import { Injectable } from '@angular/core';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	Router
} from '@angular/router';

import { UsersListService } from './users-list.service';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

	constructor(private usersListService: UsersListService, private router: Router) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (this.usersListService.getHasUserSaved()) {
   return true
  } 
  this.router.navigate(['/userslist']);
	}
}