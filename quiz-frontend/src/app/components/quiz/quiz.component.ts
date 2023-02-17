import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UUID } from 'angular2-uuid';
import { Quiz } from 'src/app/models/quiz';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
newQuiz() {
throw new Error('Method not implemented.');
}
question() {
throw new Error('Method not implemented.');
}
  quizList: Quiz[] = [];
  errormessage: string = '';
  totalPages: number = 0;
  currentPage: number = 0;

  constructor(private authenticationService: AuthenticationService, private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.getAllQuiz().subscribe((res) => {
                            
      console.log("Test" + res);
      this.quizList = res;
    }, (error)=>{console.log(error);  });

    /*this.quizList =[
      { id: UUID.UUID(), name: 'QUIZ JAVA', description:" DESCRIPTION ", isShared:true, isActive:false },
      { id: UUID.UUID(), name: 'QUIZ SPRIND', description:" DESCRIPTION ", isShared:false, isActive:true },
      { id: UUID.UUID(), name: 'QUIZ SECURITY ', description:" DESCRIPTION ", isShared:true, isActive:false },
      { id: UUID.UUID(), name: 'QUIZ ANGULAR', description:" DESCRIPTION ", isShared:false, isActive:true },
      { id: UUID.UUID(), name: 'QUIZ JWT', description:" DESCRIPTION ", isShared:true, isActive:true },
    ];*/
   /*  for (let index = 0; index < 10; index++) {
      this.quizList.push({ id: UUID.UUID(), name: 'QUIZ JAVA', description:" DESCRIPTION ", isShared:true, isActive:false });
       this.quizList.push({ id: UUID.UUID(), name: 'QUIZ SPRIND', description:" DESCRIPTION ", isShared:false, isActive:true });
       this.quizList.push( { id: UUID.UUID(), name: 'QUIZ SECURITY ', description:" DESCRIPTION ", isShared:true, isActive:false });
       this.quizList.push({ id: UUID.UUID(), name: 'QUIZ ANGULAR', description:" DESCRIPTION ", isShared:false, isActive:true });
       this.quizList.push({ id: UUID.UUID(), name: 'QUIZ JWT', description:" DESCRIPTION ", isShared:true, isActive:true });
    } */
  }

  updateQuiz(arg0: string) {
    throw new Error('mofidier un quiz form');
  }
  gotToPage(_t46: number) {
    throw new Error('pagination');
  }
}
