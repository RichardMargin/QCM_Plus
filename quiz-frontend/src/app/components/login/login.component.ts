import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppUserService } from 'src/app/services/app-user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  @ViewChild('passwordInput')
  passwordInput!: ElementRef;

  @ViewChild('usernameInput')
  usernameInput!: ElementRef;

  loginForm!: FormGroup;
  errormessage:string="";
   showPassword: boolean = false;
  
  constructor(
    private fb : FormBuilder,
    private authenticationService : AuthenticationService,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(7)]),
    });
  }

  connect() {
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;
  
    this.authenticationService.login(username, password).subscribe({
      next: (responseAppUser) => {
        this.authenticationService.authenticateUser(responseAppUser).subscribe({
          next: (data) => {
            this.router.navigateByUrl("/home");
          }
        });
      },
      error: (err) => {
        const dialogRef = this.dialog.open(DialogComponent, {
          data: {
            title: 'Error',
            message: "le mot de passe ou le nom d'utilisateur est incorrect ou l'utilisateur n'est pas actif"
          }
        });
      },
    });
  }

    openDialog(message: string): void {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '250px',
        data: { message: message }
      });
    
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

    btnShowHidePassword() {
      const password = this.passwordInput.nativeElement.value;
        this.showPassword = !this.showPassword;
        this.passwordInput.nativeElement.type = this.showPassword ? 'text' : 'password';     
    }   

    
}
