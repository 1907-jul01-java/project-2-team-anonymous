import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product.service';
import { __values } from 'tslib';
import { TransactionService } from './../../transaction.service';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
    selector: 'app-checkproduct',
    templateUrl: './checkproduct.component.html',
    styleUrls: ['./checkproduct.component.css']
})
export class CheckproductComponent implements OnInit {
    product: any = {};
    constructor(private productservice: ProductService, private router: Router, private activatedroute: ActivatedRoute, private transactionservice: TransactionService, private ngFlashMessageService: NgFlashMessageService) {
    }
    ngOnInit() {
        this.getproductbyid();
    }

    getproductbyid() {
        this.productservice.getproductbyid(this.activatedroute.params['value'].id).subscribe(result => this.product = result);
    }

    addToCart() {
        this.transactionservice.addToCart(this.product.id).subscribe(() => {
            this.ngFlashMessageService.showFlashMessage({
                // Array of messages each will be displayed in new line
                messages: ["Added to Cart"],
                // Whether the flash can be dismissed by the user defaults to false
                dismissible: true,
                // Time after which the flash disappears defaults to 2000ms
                timeout: false,
                // Type of flash message, it defaults to info and success, warning, danger types can also be used
                type: 'danger'
            });
        });
    }
}
