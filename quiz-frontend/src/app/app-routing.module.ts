import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUserComponent } from './components/app-user/app-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionComponent } from './components/question/question.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ResultComponent } from './components/result/result.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },

  {
    path: 'home',
    component: HomeComponent, canActivate: [AuthenticationGuard],
    children: [
      { path: 'quiz', component: QuizComponent, canActivate: [AdminGuard] },
      { path: 'question', component: QuestionComponent, canActivate: [AdminGuard] },
      { path: 'intern', component: AppUserComponent, canActivate: [AdminGuard] },
      { path: 'result', component: ResultComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
