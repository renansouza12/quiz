import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private quizQuestionSource = new BehaviorSubject<string>('');
  quizQuestion = this.quizQuestionSource.asObservable();

  setQuestion(question:string){
    this.quizQuestionSource.next(question)
  }

  private quizResult = new BehaviorSubject<string>('');
  finalAnswer = this.quizResult.asObservable();

  getFinalAnswer(answer:string){
    this.quizResult.next(answer);
  }
 
}
