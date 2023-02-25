import { Component } from '@angular/core';
import {Question} from "../../../models/question";
import {AuthenticationService} from "../../../services/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionService} from "../../../services/question.service";
import {Quiz} from "../../../models/quiz";
import {Answer} from "../../../models/answer";
import {AnswerService} from "../../../services/answer.service";

@Component({
  selector: 'app-exam-questions',
  templateUrl: './exam-questions.component.html',
  styleUrls: ['./exam-questions.component.css']
})


export class ExamQuestionsComponent {

  questionList: Question[] = [];

  quizList: Quiz[] = [];
  answerList: Answer[] = [];
  errormessage: string = '';
  totalPages: number = 0;
  currentPage: number = 0;
  quizId: number = 0;
  answerId: number = 0;

constructor(
  private authenticationService: AuthenticationService,
  private questionService:QuestionService,
  private answerService:AnswerService,
  private router: Router,

  private route: ActivatedRoute,

) {
}


  ngOnInit(): void {

    if (this.route.snapshot.queryParams['quizId']) {
      this.quizId = this.route.snapshot.queryParams['quizId'];

      this.questionService.getAllQuestionByQuizId(this.quizId).subscribe({
        next: (data) => {
          this.questionList = data;
        },
        error: (err) => {
          this.errormessage = err;
        },
      });
    }

    this.answerService.getAllAnswerByQuestionId(this.quizId).subscribe({
      next: (data) => {
        this.answerList = data;
      },
      error: (err) => {
        this.errormessage = err;
      },
    });

}

}
