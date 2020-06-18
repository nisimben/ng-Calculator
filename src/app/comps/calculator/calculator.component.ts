import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServicesService } from '../myservices/services.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  @ViewChild('myInput') myCorrect: ElementRef

  myInput: string = '';
  inputNumber: string = '';
  sumNum: number = 0;
  result: string = '';

  onOperatorClick(val) {
    console.log(val);
    this.inputNumber += val;
    this.result = this.inputNumber;


  }
  onEqual(val) {
    console.log(this.inputNumber);

    this.sumNum = eval(this.inputNumber);

    this.result += `=${this.sumNum.toString()}`
    this.inputNumber = this.sumNum.toString()

    this.srvHistory.arrHistory.push(this.result)
  }
  onkey(key: any) {
    console.log(key);
    let myE1 = this.myCorrect.nativeElement;
    let pattern = /^(?:(?:\d+(?:\.\d*)?|\.\d+)(?:[-+/*%]|$))+$/g;
    myE1.onkeypress = ev => {
      if (!ev.key.match(pattern)) {
        return false;
      }
    }
    this.inputNumber = key;
    this.result = this.inputNumber;
  }


  constructor(public srvHistory: ServicesService) { }

  ngOnInit(): void {
  }

}
