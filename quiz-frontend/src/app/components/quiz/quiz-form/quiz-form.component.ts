import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz.service';
import { UtilsFunction } from 'src/app/utils/utilsFunction';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css'],
})

export class QuizFormComponent implements OnInit {

  quizForm!: FormGroup;
  errormessage: string = '';
  quiz!: Quiz;
  quizId: number = 0;

  constructor(
    private fb: FormBuilder,
    private quizService: QuizService,
    private snackbar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
    public utilsFunction: UtilsFunction) {}

  ngOnInit(): void {
    if (this.route.snapshot.queryParams['quizId']) {
      this.quizId = this.route.snapshot.queryParams['quizId'];
      this.getQuiz(this.quizId);
    }

    this.quizForm = this.fb.group({
      id: this.fb.control(null, []),
      name: this.fb.control(null, [Validators.required, Validators.minLength(3)]),
      description: this.fb.control(null, [Validators.required, Validators.minLength(5)]),
      isShared: this.fb.control(null, [Validators.required]),
      isActive: this.fb.control(null, [Validators.required]),
    });

    if (this.quizId) {
      this.getQuiz(this.quizId);
    }

  }

  saveQuiz() {

    this.quizService.createOrUpdateQuiz(this.quizForm.value).subscribe({
      next: (data) => {
        this.quizForm.patchValue(data);
        this.snackbar.open('Quiz enrgistré ', 'Fermer', {
          duration: 1500,
          panelClass: 'snackBar-test'
         
        });
      },
      error: (err) => {
        this.errormessage = err;
      }
    });
  }

  getQuiz(id: number) {
    this.quizService.getQuizById(id).subscribe({
      next: (data) => {
        this.quiz = data;
        this.quizForm.patchValue(this.quiz);
      },
      error: (err) => {
        this.errormessage = err;
      }
    });
  }

  prevPage(){
    this.router.navigateByUrl("/home/quiz");
  }

}
