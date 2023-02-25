import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from '../models/answer';
import { Constants } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient)  { }
  /* POST OR PUT  */
  createOrUpdateAnswer(answer: Answer) {
    if (answer.id) {
      return this.http.put<Answer>(Constants.URL + 'answer', answer);
    } else {
      return this.http.post<Answer>(Constants.URL + 'answer', answer);
    }
  }

  /* GET BY ID */
  getAnswerById(id: number) {
    return this.http.get<Answer>(Constants.URL + 'answer' + id);
  }

  /* GET ALL */
  getAllAnswer() {
    return this.http.get<Answer[]>(Constants.URL + 'answer');
  }

  /* GET ALL BY QUESTION ID */
  getAllAnswerByQuestionId(id: number) {
    return this.http.get<Answer[]>(Constants.URL + 'answer' + id);
  }
}
