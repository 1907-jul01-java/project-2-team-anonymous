import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product.service';
import { __values } from 'tslib';

@Component({
    selector: 'app-checkproduct',
    templateUrl: './checkproduct.component.html',
    styleUrls: ['./checkproduct.component.css']
})
export class CheckproductComponent implements OnInit {
    product: any = {};
    constructor(private productservice: ProductService, private router: Router, private activatedroute: ActivatedRoute) {
        console.log(this.activatedroute.params['value'].id);
    }
    ngOnInit() {
<<<<<<< HEAD
        this.getproductbyid();
    }

    getproductbyid() {
        this.productservice.getproductbyid(this.activatedroute.params['value'].id).subscribe(result => this.product = result);
=======
        this. getproductbyid();
    }

    getproductbyid() {
        this.productservice.getproductbyid(this.activatedroute.params['value'].id).subscribe(result => this.product = result)
>>>>>>> JackieBranch
    }

}
