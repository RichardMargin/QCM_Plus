import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) { }
    
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      /* check if current user is an admin or not */  
    let isCurrentUserAdmin = this.authenticationService.isAdmin();
    console.log("isCurrentUserAdmin " + isCurrentUserAdmin);
      
    /* user not admin will be redirected to login page 
      else user can access route 
    */
    if (!isCurrentUserAdmin) {
      this.router.navigateByUrl("");
      console.log("!isCurrentUserAdmin " + (!isCurrentUserAdmin));
      return false;
    } else {
      return isCurrentUserAdmin;
    }
  }
  
}
