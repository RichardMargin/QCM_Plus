import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';
import {Question} from 'src/app/models/question';
import {QuestionService} from 'src/app/services/question.service';
import {UtilsFunction} from 'src/app/utils/utilsFunction';
import {Answer} from "../../../models/answer";

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  questionForm: FormGroup = <FormGroup>{};
  errormessage: string = '';
  question: Question = <Question>{};
  questionId: number = 0;
  newQuestion: boolean = true;

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionService,
    private snackbar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
    public utilsFunction: UtilsFunction) {
  }

  ngOnInit(): void {
    if (this.route.snapshot.queryParams['questionId']) {
      this.newQuestion = false;
      this.questionId = this.route.snapshot.queryParams['questionId'];
      this.getQuestion(this.questionId);
    }

    this.questionForm = this.fb.group({
      id: this.fb.control(null, []),
      quizId: this.fb.control(history.state.quizId as number, []),
      content: this.fb.control(null, [Validators.required, Validators.minLength(5)]),
      isActive: this.fb.control(null, [Validators.required]),
      answer1: this.fb.control(null, [Validators.required, Validators.minLength(5)]),
      answer2: this.fb.control(null, [Validators.required, Validators.minLength(5)]),
      answer3: this.fb.control(null, [Validators.minLength(5)]),
      answer4: this.fb.control(null, [Validators.minLength(5)]),
      answer5: this.fb.control(null, [Validators.minLength(5)]),
    });

  }

  displayErrorForAnswer(index: number): string {

    // @ts-ignore
    return this.utilsFunction.getMessageError('Réponse ' + index, this.questionForm.controls['answer' + index].errors);
  }

  saveQuestion() {
    if (this.newQuestion == false) {
      for (let i = 0; i < this.question.answers.length; i++) {
        this.question.id = this.questionForm.get("id")?.value;
        this.question.answers[i].content = this.questionForm.get("answer" + [i + 1])?.value;
      }
    } else {
      let answers: Answer[] = [];
      for (let i = 0; i < 5; i++) {
        if (this.questionForm.get("answer" + (i + 1))?.value != null) {
          let answer: Answer = <Answer>{};
          answer.content = this.questionForm.get("answer" + [i + 1])?.value;
          if (i == 0) {
            answer.isCorrect = true;
          } else {
            answer.isCorrect = false;
          }
          answers.push(answer);
        }
      }
      this.question.answers = answers;
    }
    this.question.content = this.questionForm.get("content")?.value;
    this.question.isActive = this.questionForm.get("isActive")?.value;
    this.question.quizId = this.questionForm.get("quizId")?.value;
    this.questionService.createOrUpdateQuestion(this.question).subscribe({
      next: () => {
        this.snackbar.open('Question enregistrée', 'Fermer', {
          duration: 3000,
          panelClass: 'snackBar-test'
        });
        this.router.navigate(['/home/question'], {
          queryParams: {quizId: this.question.quizId}
        });
      },
      error: (err) => {
        this.errormessage = err;
      }
    });
  }

  getQuestion(id: number) {
    this.questionService.getQuestionById(id).subscribe({
      next: (data) => {
        this.question = data;
        this.question.quizId = history.state.quizId;
        this.questionForm.patchValue(this.question);
        if (this.question.answers != null && this.question.answers.length > 0) {
          for (let i = 0; i < this.question.answers.length; i++) {
            this.questionForm.get("answer" + (i + 1))?.setValue(this.question.answers[i].content);
          }
        }
      },
      error: (err) => {
        this.errormessage = err;
      }
    });
  }

  prevPage() {
    this.router.navigateByUrl("/home/question");
  }
}
