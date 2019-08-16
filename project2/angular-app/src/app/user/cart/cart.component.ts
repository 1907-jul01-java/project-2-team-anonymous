import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { UserService } from './../../user.service';
import { TransactionService } from './../../transaction.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    user: any = {};
    current_cart: any = {};
    totalCost: number = 0;
    constructor(private router: Router, private activatedroute: ActivatedRoute, private userservice: UserService, private transactionservice: TransactionService) {
    }

    ngOnInit() {
        this.checkLogin();

    }
    checkLogin() {
        this.userservice.checkLogin().subscribe((result) => {
            if (result == null) { this.router.navigate(['/']) }
            else {
                this.user = result;
                if (this.user.transactions) {
                    for (let transaction of this.user.transactions) {
                        if (transaction.status == "current") {
                            this.current_cart = transaction;
                            console.log(this.current_cart)
                            for (let product of this.current_cart.products) {
                                console.log(product)
                                this.totalCost += product.price
                            }
                        }
                    }
                }
            }
        });
    }

    checkOut() {
        this.transactionservice.checkOut(this.current_cart.id, this.totalCost).subscribe(() => {
            this.current_cart = {};
            this.totalCost = 0;
            this.router.navigate(['/user', this.user.id, "cart"])
        });
    }
}
