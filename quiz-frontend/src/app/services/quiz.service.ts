import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz';
import { Constants } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  /* POST OR PUT  */
  createOrUpdateQuiz(quiz: Quiz) {
    if (quiz.id) {
      return this.http.put<Quiz>(Constants.URL + 'quiz', quiz);
    } else {
      return this.http.post<Quiz>(Constants.URL + 'quiz', quiz);
    }
  }

  /* GET BY ID */
  getQuizById(id: number) {
    return this.http.get<Quiz>(Constants.URL + 'quiz' + id);
  }

  /* GET ALL */
  getAllQuiz() {
    return this.http.get<Quiz[]>(Constants.URL + 'quiz');
  }

  /* GET ALL ACTIVE */
  getAllActiveQuiz() {
    return this.http.get<Quiz[]>(Constants.URL + 'quiz/active');
  }
  /* GET ALL INACTIVE */
  getAllInactiveQuiz() {
    return this.http.get<Quiz[]>(Constants.URL + 'quiz/inactive');
  }
}
