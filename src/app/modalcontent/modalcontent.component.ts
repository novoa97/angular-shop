import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  templateUrl: './modalcontent.component.html',
  styleUrls: ['./modalcontent.component.css']
})
export class modalcontent {
  @Input() type: string = "success";
  @Output() output = new EventEmitter();

  cardnumber: string = "0000000000000000"
  cardmonth: string = "00"
  cardyear: string = "00"
  cardcv: string = "CV"

  email: string = "email"
  pass: string = "password"

}
