import { Component } from '@angular/core';
import {AppUser} from "../../models/app-user";
import {AppUserService} from "../../services/app-user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-user',
  templateUrl: './app-user.component.html',
  styleUrls: ['./app-user.component.css']
})
export class AppUserComponent {
  userList: AppUser[] = [];
  errormessage: string = '';
  totalPages: number = 0;
  currentPage: number = 0;

  constructor(
    private appUserService: AppUserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.appUserService.getAllInterns().subscribe({
      next: (data) => {
        this.userList = data;
      },
      error: (err) => {
        this.errormessage = err;
      },
    });
  }

  updateUser(userId: number) {
    this.router.navigate(['/home/internForm'], {
      queryParams: { userId: userId},
    });
  }
  gotToPage(_t46: number) {
    throw new Error('pagination');
  }

  newUser() {
    this.router.navigateByUrl('/home/internForm');
  }
}
