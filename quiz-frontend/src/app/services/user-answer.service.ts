import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAnswer } from '../models/user-answer';
import { Constants } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class UserAnswerService {
  constructor(private http: HttpClient) {}
  /* POST OR PUT  */
  createOrUpdateUserAnswer(userAnswer: UserAnswer) {
    if (userAnswer.id) {
      return this.http.put<UserAnswer>(
        Constants.URL + 'userAnswer',
        userAnswer
      );
    } else {
      return this.http.post<UserAnswer>(
        Constants.URL + 'userAnswer',
        userAnswer
      );
    }
  }

  /* GET BY ID */
  getUserAnswerById(id: number) {
    return this.http.get<UserAnswer>(Constants.URL + 'userAnswer' + id);
  }

  /* GET ALL */
  getAllUserAnswer() {
    return this.http.get<UserAnswer[]>(Constants.URL + 'userAnswer');
  }
}
