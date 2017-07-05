import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from "../../services/firebase/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private sessionsService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let redirect = !this.sessionsService.isLoggedIn();

    console.log(redirect);

    if (redirect) this.router.navigate(['/login']);
    return !redirect;
  }
}
