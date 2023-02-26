import {Answer} from "./answer";

export interface Question {
  id: number;
  content: string;
  isActive: boolean;
  answers: Answer[];
  quizId: number;

}

export class QuestionImpl implements Question {
  constructor(
    public id: number,
    public content: string,
    public isActive: boolean,
    public answers: Answer[],
    public quizId: number
  ) {}
}