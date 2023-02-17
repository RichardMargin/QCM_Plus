import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from '../models/result';
import { Constants } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient) {}
  /* POST OR PUT  */
  createOrUpdateResult(result: Result) {
    if (result.id) {
      return this.http.put<Result>(Constants.URL + 'result', result);
    } else {
      return this.http.post<Result>(Constants.URL + 'result', result);
    }
  }

  /* GET BY ID */
  getResultById(id: number) {
    return this.http.get<Result>(Constants.URL + 'result' + id);
  }

  /* GET ALL */
  getAllResult() {
    return this.http.get<Result[]>(Constants.URL + 'result');
  }
}
