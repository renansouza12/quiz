import { Component,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() btnText!:string;
  @Output() btnEvent = new EventEmitter<string>();

  btn():void{
    this.btnEvent.emit();
  }
}
