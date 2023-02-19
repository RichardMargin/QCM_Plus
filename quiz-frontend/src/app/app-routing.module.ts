import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUserFormComponent } from './components/app-user/app-user-form/app-user-form.component';
import { AppUserComponent } from './components/app-user/app-user.component';
import { ExamComponent } from './components/exam/exam.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionFormComponent } from './components/question/question-form/question-form.component';
import { QuestionComponent } from './components/question/question.component';
import { QuizFormComponent } from './components/quiz/quiz-form/quiz-form.component';
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
    component: HomeComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: 'quiz',
        component: QuizComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'quizForm',
        component: QuizFormComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'question',
        component: QuestionComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'questionForm',
        component: QuestionFormComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'intern',
        component: AppUserComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'internForm',
        component: AppUserFormComponent,
        canActivate: [AdminGuard],
      },
      { path: 'result', component: ResultComponent },
      { path: 'exam', component: ExamComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
