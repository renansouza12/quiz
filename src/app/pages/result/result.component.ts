import { Component, OnInit ,Input} from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import quizz_questions from '../../../assets/data/quizz_questions.json';
import { Router } from '@angular/router';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit{
  result!:string;
  constructor(private sharedService: SharedService, private router: Router){}

  ngOnInit(): void {
    this.sharedService.finalAnswer.subscribe((answer)=> {
      this.result = quizz_questions.results[answer as keyof typeof quizz_questions.results];
    });
  }

  restartQuiz():void{
    this.router.navigate(['/']);
  }
}
