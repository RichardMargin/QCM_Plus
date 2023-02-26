import { Component, OnInit } from '@angular/core';
import { Question } from '../../../models/question';
import { AuthenticationService } from '../../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../../../services/question.service';
import { Quiz } from '../../../models/quiz';
import { Answer } from '../../../models/answer';
import { AnswerService } from '../../../services/answer.service';

@Component({
  selector: 'app-exam-questions',
  templateUrl: './exam-questions.component.html',
  styleUrls: ['./exam-questions.component.css']
})
export class ExamQuestionsComponent implements OnInit {
  questionList: Question[] = [];
  quizList: Quiz[] = [];
  answerList: Answer[] = [];
  errorMessage: string = '';
  totalPages: number = 0;
  currentQuestion: number = 0;
  quizId: number = 0;
  selectedAnswerId: number = 0;
  correctAnswer: string = '';
  timeLeft: number = 20; // timer set to 20 seconds
  timeProgress: number = 100;

  interval: any;

  constructor(
    private authenticationService: AuthenticationService,
    private questionService: QuestionService,
    private answerService: AnswerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.queryParams['quizId']) {
      this.quizId = this.route.snapshot.queryParams['quizId'];

      this.questionService
        .getAllQuestionByQuizId(this.quizId)
        .subscribe({
          next: (data) => {
            this.questionList = data.sort(() => Math.random() - 0.5); // randomize the questions
            this.startTimer(); // start the timer once questions are loaded
          },
          error: (err) => {
            this.errorMessage = err;
          },
        });
    }

    this.answerService.getAllAnswerByQuestionId(this.quizId).subscribe({
      next: (data) => {
        this.answerList = data.sort(() => Math.random() - 0.5); // randomize the answers
      },
      error: (err) => {
        this.errorMessage = err;
      },
    });
  }

  selectAnswer(answerId: number) {
    this.selectedAnswerId = answerId;
  }

  validateAnswer() {
    const currentQuestionAnswers = this.questionList[this.currentQuestion].answers;
    const correctAnswer = currentQuestionAnswers[0];

    if (this.selectedAnswerId === correctAnswer.id) {
      //To Do walid: save correct answer
      console.log('Correct answer!');
    } else {
      //To Do walid: save incorrect answer
      console.log('Incorrect answer!');
    }

    this.selectedAnswerId = 0;
    this.currentQuestion++;

    if (this.currentQuestion >= this.questionList.length) {
      // redirect to the result page and then retour to home page, or to quiz page
      console.log('End of quiz');
      this.stopTimer(); // stop the timer once the quiz is complete
    } else {
      this.timeLeft = 20; // reset timer for the next question
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.timeProgress = (this.timeLeft / 30) * 100;

      } else {
        this.validateAnswer(); // automatically validate answer once the timer is up
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
  }
}
