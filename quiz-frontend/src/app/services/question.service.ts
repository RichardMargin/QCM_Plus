import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../utils/constants';
import { Question } from '../models/question';
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private http: HttpClient) {}

   /* POST OR PUT  */
   createOrUpdateQuestion(question: Question) {
    if (question.id) {
      return this.http.put<Question>(Constants.URL + 'question', question);
    } else {
      return this.http.post<Question>(Constants.URL + 'question', question);
    }
  }

  /* GET BY ID */
  getQuestionById(id: number) {
    return this.http.get<Question>(Constants.URL + 'question/' + id);
  }

  /* GET ALL BY QUIZ */
  getAllQuestionByQuiz(id: number):Observable<Question[]> {
    return this.http.get<Question[]>(Constants.URL + 'question/quiz/' + id);
  }


  getAllQuestionByQuizId(quizId: number) {
    return this.http.get<Question[]>(Constants.URL + 'question/quiz/' + quizId);
  }

}
