import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    /* check if current user is authenticated or not */  
    let isCurrentUserAuthenticated = this.authenticationService.isAuthenticated();
      
    /* user not authenticated will be redirected to login page 
      else user can access route 
    */
    if (!isCurrentUserAuthenticated) {
      this.router.navigateByUrl("");
      return false;
    } else {
      return isCurrentUserAuthenticated;
    }
  }
}
