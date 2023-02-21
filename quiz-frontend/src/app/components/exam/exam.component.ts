import { Component } from '@angular/core';
import {Quiz} from "../../models/quiz";
import {AuthenticationService} from "../../services/authentication.service";
import {QuizService} from "../../services/quiz.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent {

  question() {
    throw new Error('Method not implemented.');
  }

  quizList: Quiz[] = [];
  errormessage: string = '';
  totalPages: number = 0;
  currentPage: number = 0;

  constructor(
    private authenticationService: AuthenticationService,
    private quizService: QuizService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.quizService.getAllQuizForIntern().subscribe({
      next: (data) => {
        this.quizList = data;
      },
      error: (err) => {
        this.errormessage = err;
      },
    });
  }
}
