import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  errormessage: string = '';

  constructor(
    public authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  userLogout() {
    this.authenticationService.logout().subscribe({
      next: (response) => {
        this.router.navigateByUrl("/login");
      },
      error: (err) => {
        this.errormessage = err;
      },
    });
  }
}
