import { Component, OnInit} from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  question!:string;

  constructor(private sharedService: SharedService){}

  ngOnInit(): void {
   this.sharedService.quizQuestion.subscribe((question)=> this.question = question);
   }

  
  
}
