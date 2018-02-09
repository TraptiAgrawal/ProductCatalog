import { Pipe, PipeTransform} from '@angular/core';
import { MProduct} from './products';

@Pipe({
  name: 'ProductFilter'
})

export class ProductsFilter implements PipeTransform{
  transform(productValues: MProduct[], filterBy: string): MProduct[] {
    filterBy= filterBy ? filterBy.toLowerCase() : null;
    return filterBy? productValues.filter((product:MProduct)=>{ return product.productName.toLowerCase().indexOf(filterBy)!== -1}):productValues
  //return productValues;
 // return filterBy? value.filter((product:MProduct)=> product.productName.toLowerCase().indexOf(filterBy) !==-1):value
  }
}
