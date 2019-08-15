import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product.service';
import { __values } from 'tslib';
import { TransactionService } from './../../transaction.service';

@Component({
    selector: 'app-checkproduct',
    templateUrl: './checkproduct.component.html',
    styleUrls: ['./checkproduct.component.css']
})
export class CheckproductComponent implements OnInit {
    product: any = {};
    constructor(private productservice: ProductService, private router: Router, private activatedroute: ActivatedRoute, private transactionservice: TransactionService) {
    }
    ngOnInit() {
        this.getproductbyid();
    }

    getproductbyid() {
        this.productservice.getproductbyid(this.activatedroute.params['value'].id).subscribe(result => this.product = result);
    }

    addToCart() {
        this.transactionservice.addToCart(this.product.id).subscribe();
    }
}
