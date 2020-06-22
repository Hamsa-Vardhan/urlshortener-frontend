import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LoginAuthGuard implements CanActivate {
	constructor(private router: Router) {}
	canActivate(): boolean {
		if (!!localStorage.getItem('token')) return true;
		else {
			this.router.navigate([ '' ]);
			return false;
		}
	}
}
