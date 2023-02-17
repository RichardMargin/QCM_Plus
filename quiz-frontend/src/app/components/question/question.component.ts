import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UUID } from 'angular2-uuid';
import { Question } from 'src/app/models/question';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  questionList: Question[] = [];
  errormessage: string = '';
  totalPages: number = 0;
  currentPage: number = 0;

  constructor(public authenticationService: AuthenticationService,
    private router: Router) {}
  ngOnInit(): void {
    this.questionList  =[
      { id: UUID.UUID(), content: 'Qui a creér Java',  isActive:false },
      { id: UUID.UUID(), content: 'Qui a creér Java',  isActive:true },
      { id: UUID.UUID(), content: 'Qui a creér Java ', isActive:false },
      { id: UUID.UUID(), content: 'Qui a creér Java',  isActive:true },
      { id: UUID.UUID(), content: 'Qui a creér Java',  isActive:true },
    ];

  }

  newQuestion() {
    this.router.navigateByUrl("/home/questionForm");
  }
  updateQuestion(arg0: string) {
    throw new Error('Method not implemented.');
  }
  deleteQuestion(arg0: string) {
    throw new Error('Method not implemented.');
  }
  seeAnswer() {
    throw new Error('Method not implemented.');
  }
  gotToPage(index: number) {
    throw new Error('Method not implemented.');
  }
}
