import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppUserService } from 'src/app/services/app-user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  loginForm!: FormGroup;
  errormessage:string="";
   showPassword: boolean = false;
  
  constructor(
    private fb : FormBuilder,
    private authenticationService : AuthenticationService,
    private router: Router) { }

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
          this.errormessage = err;
        },
      });

    }

    btnShowHidePassword(){
      if(this.showPassword){
        //document.getElementById("password"); 
      }
    }
}
