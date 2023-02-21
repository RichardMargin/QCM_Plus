import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Question} from 'src/app/models/question';
import {AuthenticationService} from 'src/app/services/authentication.service';
import {QuestionService} from "../../services/question.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  questionList: Question[] = [];
  errormessage: string = '';
  totalPages: number = 0;
  currentPage: number = 0;
  quizId: number = 0;

  constructor(private authenticationService: AuthenticationService,
              private questionService: QuestionService,
              private router: Router,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    if (this.route.snapshot.queryParams['quizId']) {
      this.quizId = this.route.snapshot.queryParams['quizId'];
      this.questionService.getAllQuestionByQuiz(this.quizId).subscribe({
        next: (data) => {
          this.questionList = data;
        },
        error: (err) => {
          this.errormessage = err;
        },
      });
    }
  }

  newQuestion() {
    this.router.navigateByUrl("/home/questionForm", {
      state: {quizId: this.quizId}
    });
  }

  updateQuestion(questionId: number) {
    this.router.navigate(['/home/questionForm'], {
      queryParams: {questionId: questionId},
      state: {quizId: this.quizId}
    });
  }

  deleteQuestion(arg0: string) {
    throw new Error('Method not implemented.');
  }

  seeAnswer() {
    throw new Error('Method not implemented.');
  }

  gotToPage(index: number) {
    throw new Error('Method not implemented.');
  }

}
