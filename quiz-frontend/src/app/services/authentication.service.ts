import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppUser } from '../models/app-user';
import { Constants } from '../utils/constants';
import { Autority } from '../utils/roles';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  users: AppUser[] = [];
  user: AppUser = <AppUser>{};
  authenticatedUser: AppUser | undefined;

  constructor(private http: HttpClient) {}

  /* CONNECT CHEK WITH DB */
  login(username:string,password:string): Observable<AppUser>{
    this.user.lastName = username;
    this.user.password = password;
    return this.http.post<AppUser>(Constants.URL + 'login', this.user);
  }

  /* KEEP INFO ON CURRENT USER */
  authenticateUser(appUser : AppUser): Observable<boolean>{
    this.authenticatedUser = appUser;
    //localStorage.setItem("authUser", JSON.stringify({username:appUser.lastName, role: appUser.role, jwt:'JWTOKEN123'}));
    return of(true);
  }

  hasRole(role: string): boolean{
    return this.authenticatedUser!.role.includes(role);
  }

  isAuthenticated(){
    return this.authenticatedUser != undefined;
  }

  isAdmin(): boolean{
    return this.authenticatedUser?.role == Autority.ADMIN ? true:false;
  }

  logout(): Observable<boolean> {
    //localStorage.removeItem("authUser");
    this.authenticatedUser = undefined;
    return of(true);
  }
}
