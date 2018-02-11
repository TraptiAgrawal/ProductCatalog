import {Component, OnChanges} from '@angular/core';
import {Input, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls : ['./star.component.css']
})
export class StarComponent {
  @Input() rating : number;
  @Output() ratingToDisp : EventEmitter<string>=new EventEmitter<string>();
  starWidth : number;

  ngOnChanges() :void{
    this.starWidth = this.rating * 86/5;
  }
  ratingShow($event):void{
    if($event.type=="mouseenter") {
      this.ratingToDisp.emit(`Rating is ${this.rating}`);
    }
    else this.ratingToDisp.emit("");

  }
}
