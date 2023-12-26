import { Component, OnInit } from '@angular/core';
import quizz_questions from '../../../assets/data/quizz_questions.json';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  options: any[] = [];
  optionSelected: string[] = [];
  results:string[] = [];
  finalAnswer!:string;
  index:number = 0;

  constructor(private sharedService: SharedService, private router:Router) {}

  ngOnInit(): void {
    this.loadOptions();
  }

  loadOptions():void {
    this.options = [];
    const currentQuestion = quizz_questions.questions;

    this.sharedService.setQuestion(currentQuestion[this.index].question);

    currentQuestion[this.index].options.map((option) => this.options.push(option));
  }

  optionChoose(value: string) {
    this.optionSelected.push(value);
    this.nextStep();
  }

  nextStep() {
    this.index < quizz_questions.questions.length -1 ? (this.index += 1, this.loadOptions()) : this.checkDuplicates();
   }

  checkDuplicates(){
    this.optionSelected.forEach((value,i)=>{
      this.optionSelected.indexOf(value) !== i ? this.results.push(value): '';
    })
    this.finalAnswer = this.results[0];
    this.sharedService.getFinalAnswer(this.finalAnswer);
    this.router.navigate(['/result']);
  }
}
