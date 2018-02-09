import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {StarComponent} from './star.component';

@NgModule({
  imports: [CommonModule],
  exports: [StarComponent],
  declarations : [StarComponent],
  providers : [],
  bootstrap : [StarComponent]
})
export class SharedModule {

}
