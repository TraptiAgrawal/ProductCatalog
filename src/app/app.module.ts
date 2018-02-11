import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { SharedModule} from './Shared/shared.module';

import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { ProductComponent} from './Products/products.component';
import { OrderComponent} from './Orders/orders.component';
import { ProductsFilter} from './Products/products.filter';
import { ProductFilterByCode } from './products/products.filterByCode';
//import { ProductNewService } from './products/productnew.service';
import { ProductsService } from './products/products.service';



@NgModule({
  imports: [ BrowserModule, FormsModule, SharedModule, HttpModule ],
  declarations : [
    AppComponent,
    ProductComponent,
    OrderComponent,
    ProductsFilter,
    ProductFilterByCode
  ],
  bootstrap: [AppComponent],
  providers :[ ProductsService ]
})
export class AppModule{

}
