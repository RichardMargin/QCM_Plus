import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {

  quizList: Quiz[] = [];
  errormessage: string = '';
  totalPages: number = 0;
  currentPage: number = 0;

  constructor(
    private quizService: QuizService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.quizService.getAllQuiz().subscribe({
      next: (data) => {
        this.quizList = data;
      },
      error: (err) => {
        this.errormessage = err;
      },
    });
  }

  updateQuiz(quizId: number) {
    this.router.navigate(['/home/quizForm'], {
      queryParams: { quizId: quizId},
    });
  }
  gotToPage(_t46: number) {
    throw new Error('pagination');
  }

  newQuiz() {
    this.router.navigateByUrl('/home/quizForm');
  }

  showQuizquestions(quizId: number) {
    this.router.navigate(['/home/question'], {
      queryParams: { quizId: quizId}
    });
  }

}
