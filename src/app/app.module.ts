import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { FormsModule} from '@angular/forms';
import { ProductComponent} from './Products/products.component';
import { OrderComponent} from './Orders/orders.component';
import { SharedModule} from './Shared/shared.module';
import { ProductsFilter} from './Products/products.filter';

@NgModule({
  imports: [ BrowserModule, FormsModule, SharedModule ],
  declarations : [
    AppComponent,
    ProductComponent,
    OrderComponent,
    ProductsFilter
  ],
  providers :[ ],
  bootstrap: [AppComponent]
})
export class AppModule{

}
