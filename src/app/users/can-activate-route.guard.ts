import { Injectable } from '@angular/core';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	Router
} from '@angular/router';

import { UsersService } from './services/users.service';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

	constructor(private usersService: UsersService, private router: Router) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (this.usersService.getHasUserSaved()) {
   return true
  } 
  this.router.navigate(['/userslist']);
	}
}