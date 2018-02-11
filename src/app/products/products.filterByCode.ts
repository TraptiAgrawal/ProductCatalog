import {Pipe, PipeTransform} from '@angular/core';
import { MProduct } from './products';

@Pipe({
 name:'FilterByCode'
})
export class ProductFilterByCode implements PipeTransform{
    transform(values:MProduct[], filterBy:string):MProduct[] {
     filterBy = filterBy?filterBy.toLowerCase():null;
     return filterBy? values.filter( (value:MProduct) =>  value.productCode.toLowerCase().indexOf(filterBy)!== -1 ):values;
 }
}