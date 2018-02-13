import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    productId: string;
    imgUrl :string;
    productName: string;
    productDesc :string;
    constructor(private _actRouter:ActivatedRoute,
    private _router:Router){ }
    
    ngOnInit():void{
        let id = +this._actRouter.snapshot.params['id'];
        this.productId= `${id}`;
        this._actRouter.queryParams
                 .subscribe(
                    params => {
                        this.productName=params['name'];
                        this.productDesc=params['desc'];
                        this.imgUrl=params['imgUrl'];
                    }
                 )
    }
    onBack():void{
        this._router.navigate(['/products']);
    }
}