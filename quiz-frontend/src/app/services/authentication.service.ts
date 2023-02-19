import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Observable, of, throwError } from 'rxjs';
import { AppUser } from '../models/app-user';
import { Constants } from '../utils/constants';
import { Autority } from '../utils/roles';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  users: AppUser[] = [];
  authenticatedUser: AppUser | undefined;

  constructor() {
    this.users.push({id: UUID.UUID(), lastName: 'sarah', firstName: 'JANE', company: 'COAPGEMINI', password: 'password', role:'ADMINISTRATOR'});
    this.users.push({id: UUID.UUID(), lastName: 'momo', firstName: 'JANE', company: 'COAPGEMINI', password: 'momo', role:'ADMINISTRATOR'});
    this.users.push({id: UUID.UUID(), lastName: 'DOE', firstName: 'JOHN', company: 'COAPGEMINI', password: 'PASSWORD2', role:'INTERN'});
    this.users.push({id: UUID.UUID(), lastName: 'moha', firstName: 'JOHN', company: 'COAPGEMINI', password: 'momo', role:'INTERN'});
    this.users.push({id: UUID.UUID(), lastName: 'GELLER', firstName: 'MONICA', company: 'COAPGEMINI', password: 'PASSWORD3', role:'INTERN'});
    this.users.push({id: UUID.UUID(), lastName: 'GELLER', firstName: 'ROSS', company: 'COAPGEMINI', password: 'PASSWORD4', role:'INTERN'});
    this.users.push({id: UUID.UUID(), lastName: 'BUFFET', firstName: 'PHOEBE', company: 'COAPGEMINI', password: 'PASSWORD5', role:'ADMIN'});
  }

  /* CONNECT CHEK WITH DB */
  login(username:string,password:string): Observable<AppUser>{
    let appUser = this.users.find(user => user.lastName == username );

    if(!appUser) return throwError(() => new Error("Utilisateur nom trouver"));
    if(appUser.password != password) return throwError(() => new Error("Mauvais mot de passe"));

    return of(appUser);
  }

  /* KEEP INFO ON CURRENT USER */
  authenticateUser(appUser : AppUser): Observable<boolean>{
    this.authenticatedUser = appUser;
    localStorage.setItem("authUser", JSON.stringify({username:appUser.lastName, role: appUser.role, jwt:'JWTOKEN123'}));
    return of(true);
  }

  hasRole(role: string): boolean{
    return this.authenticatedUser!.role.includes(role);
  }

  isAuthenticated(){
    return this.authenticatedUser != undefined;
  }

  isAdmin(): boolean{
    console.log(this.authenticatedUser?.role)
    return this.authenticatedUser?.role == Autority.ADMIN ? true:false;
  }

  logout(): Observable<boolean> {
    localStorage.removeItem("authUser");
    this.authenticatedUser = undefined;
    return of(true);
  }
}
