import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppUser } from '../models/app-user';
import { Constants } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class AppUserService {
  constructor(private http: HttpClient) {}
  /* POST OR PUT  */
  createOrUpdateAppUser(appUser: AppUser) {
    if (appUser.id) {
      return this.http.put<AppUser>(Constants.URL + 'appUser', appUser);
    } else {
      return this.http.post<AppUser>(Constants.URL + 'appUser', appUser);
    }
  }

  /* GET BY ID */
  getAppUserById(id: number) {
    return this.http.get<AppUser>(Constants.URL + 'appUser' + id);
  }

  /* GET ALL */
  getAllAppUser() {
    return this.http.get<AppUser[]>(Constants.URL + 'appUser');
  }
}
