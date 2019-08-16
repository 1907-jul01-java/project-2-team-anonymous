import { Component, OnInit } from '@angular/core';
import { UserService } from './../../user.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
    user: any = {};
    constructor(private userservice: UserService, private router: Router) { }

    ngOnInit() {
        this.checkLogin();
    }

    checkLogin() {
        this.userservice.checkLogin().subscribe((result) => {
            if (result == null) { this.router.navigate(['/']) }
            else {
                this.user = result;
                console.log(this.user);
            }
        });
    }

}
