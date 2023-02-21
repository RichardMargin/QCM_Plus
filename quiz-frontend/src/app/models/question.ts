import {Answer} from "./answer";

export interface Question {
  id: number;
  content: string;
  isActive: boolean;
  answers: Answer[];
  quizId: number;

}
