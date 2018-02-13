import { Injectable } from '@angular/core';
import { MProduct } from './products';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ProductsService{

    private _productUrl='https://ngapi4.herokuapp.com/api/getProducts';
    constructor(private _http:Http){};

   getProducts():Observable<MProduct[]>{
    return this._http.get(this._productUrl)
     .map((res:Response)=>  <MProduct[]>res.json())
     .catch(this.errHandler);


   };
   
   private errHandler(err:Response){
      return Observable.throw(err.statusText || "Server Error");
   }
}