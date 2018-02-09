import {Component, OnChanges} from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls : ['./star.component.css']
})
export class StarComponent {
  @Input() rating : number;
  starWidth : number;

  ngOnChanges() :void{
    this.starWidth = this.rating * 86/5;
  }
}
