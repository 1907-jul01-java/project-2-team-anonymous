import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { UserService } from './../../user.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    user: any = {};
    current_cart: any = {};
    constructor(private router: Router, private activatedroute: ActivatedRoute, private userservice: UserService) {
        this.checkLogin();
     }

    ngOnInit() {
    }
        checkLogin() {
        this.userservice.checkLogin(1).subscribe((result) => {
            if (result == null) { this.router.navigate(['/']) }
            else {
                this.user = result;
                if (this.user.transactions) {
                    for (let transaction of this.user.transactions) {
                        if (transaction.status = "current") {
                            this.current_cart = transaction;
                            console.log(this.current_cart)
                        }
                    }
                }
            }
        });
    }


}
