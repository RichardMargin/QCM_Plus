import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {UtilsFunction} from "../../../utils/utilsFunction";
import {AppUser} from "../../../models/app-user";
import {AppUserService} from "../../../services/app-user.service";

@Component({
  selector: 'app-app-user-form',
  templateUrl: './app-user-form.component.html',
  styleUrls: ['./app-user-form.component.css']
})
export class AppUserFormComponent {
  internForm: FormGroup = <FormGroup>{};
  errormessage: string = '';
  user: AppUser = <AppUser>{};
  userId: number = 0;
  showPasswordField: boolean = true;
  newUser: boolean = true;

  constructor(
    private fb: FormBuilder,
    private appUserService: AppUserService,
    private snackbar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
    public utilsFunction: UtilsFunction) {
  }

  ngOnInit(): void {
    if (this.route.snapshot.queryParams['userId']) {
      this.userId = this.route.snapshot.queryParams['userId'];
      this.getUser(this.userId);
      this.showPasswordField = false;
      this.newUser = false;
    }

    this.internForm = this.fb.group({
      id: this.fb.control(null, []),
      lastName: this.fb.control(null, [Validators.required, Validators.minLength(3)]),
      password: this.fb.control(null, [Validators.required, Validators.minLength(5)]),
      firstName: this.fb.control(null, [Validators.required, Validators.minLength(3)]),
      company: this.fb.control(null, [Validators.required, Validators.minLength(4)]),
      isActive: this.fb.control(null, [Validators.required]),
    });
  }


  prevPage() {
    this.router.navigateByUrl("/home/intern");
  }

  saveUser() {
    console.log(this.internForm.value);
    this.appUserService.createOrUpdateAppUser(this.internForm.value).subscribe({
      next: () => {
        this.snackbar.open('Stagiaire enregistré', 'Fermer', {
          duration: 3000,
          panelClass: 'snackBar-test'
        });
        this.router.navigateByUrl("/home/intern");
      },
      error: (err) => {
        this.errormessage = err;
      }
    });

  }

  private getUser(id: number) {
    this.appUserService.getAppUserById(id).subscribe({
      next: (data) => {
        this.user = data;
        this.internForm.patchValue(this.user);
      },
      error: (err) => {
        this.errormessage = err;
      }
    });
  }

  showPassword(button: HTMLButtonElement) {
    if (this.showPasswordField==false) {
      button.innerHTML="Annuler la modification du mot de passse";
      this.showPasswordField = true;
    } else {
      button.innerHTML="Modifier le mot de passe";
      this.internForm.controls['password'].setValue(null);
      this.showPasswordField = false;
    }
  }

}
