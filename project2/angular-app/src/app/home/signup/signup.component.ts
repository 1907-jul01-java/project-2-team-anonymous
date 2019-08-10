import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {
    user: any = {};
    loginUser: any = {};

    constructor(private userservice: UserService, private router: Router) { }

    ngOnInit() {
    }

    create() {
        console.log(this.user);
        this.userservice.create(this.user).subscribe(() => this.router.navigate(['/']));
    }

    login() {
        this.userservice.login(this.loginUser).subscribe((result) => this.router.navigate(['/user', result['id'], 'shop']));
    }
}
