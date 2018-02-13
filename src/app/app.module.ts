import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { SharedModule} from './Shared/shared.module';
import { RouterModule  }  from '@angular/router';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent} from './products/products.component';
import { OrderComponent} from './orders/orders.component';
import { ProductsFilter} from './products/products.filter';
import { ProductFilterByCode } from './products/products.filterByCode';
import { ProductsService } from './products/products.service';
import { ProductDetailComponent } from './products/product-detail.component';
import { NotFound } from './home/notfound.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  imports: [ BrowserModule, FormsModule, SharedModule, HttpModule,
    RouterModule.forRoot([
  
      { path:'products', component: ProductComponent },
      { path:'products/:id', component: ProductDetailComponent },
      { path:'orders', component: OrderComponent },
      { path:'home', component: HomeComponent },
      { path:'', redirectTo: 'home', pathMatch: 'full'},
      { path:'**', component : NotFound}
     
    ])
 ],
  declarations : [
    AppComponent,
    ProductComponent,
    HomeComponent,
    ProductDetailComponent,
    NotFound,
    OrderComponent,
    ProductsFilter,
    ProductFilterByCode
  ],
  
  bootstrap: [AppComponent],
  providers :[ ProductsService ]
})
export class AppModule{

}
