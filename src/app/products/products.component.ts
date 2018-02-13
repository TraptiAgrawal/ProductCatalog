import {Component, OnInit} from '@angular/core';
import {MProduct} from './products';
import { ProductsService } from './products.service';



@Component({
  selector : 'app-product',
  templateUrl : './products.component.html',
  styleUrls : ['./products.component.css'],
  
})
export class ProductComponent implements OnInit
{
   productListTitle : String ="Product Catalog";
   listFilter : String ;
   codeFilter :String;
   showImage : boolean = true;
   imageWidth : number = 50;
   showGridView :boolean = false;
   gridRowClass :string;
   ratingOnHover :string;
   errMessage :string;

   toggleGridView():void {
     this.showGridView = ! this.showGridView;
     this.gridRowClass= this.showGridView ? "grid-row" :"";
   }
   products : MProduct[];

  toggleImgDisp():void {
    this.showImage= !this.showImage;
  }
  dispRating(ratingMessage:string) :void{
    this.ratingOnHover=ratingMessage;
  };

 constructor(private _productService:ProductsService){    //Service will be always available to this component
    
 }
  ngOnInit(){

    console.log("This is onInit Lifecycle hook for products component");
    this._productService.getProducts()
    .subscribe(products=> this.products=products,
    err=> this.errMessage=<any>err)
    
  }

}
