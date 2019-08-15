import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    user: any = {};
    current_cart: any={};

  constructor(private userservice: UserService, private router:Router, private activatedroute:ActivatedRoute) {
      this.checkLogin();
  }

  ngOnInit() {
  }
  
  checkLogin(){
      this.userservice.checkLogin(this.activatedroute.params['value'].id).subscribe((result)=>{
          if(result == null ){ this.router.navigate(['/'])}
          else{
              this.user = result;
              console.log(this.user);
              if(this.user.transactions){
                  for(let transaction of this.user.transactions){
                      if(transaction.status = "current"){
                        this.current_cart = transaction;
                        console.log(this.current_cart)
                      }
                  }
              }
          }
        });
  }

  logout(){
      this.userservice.logout().subscribe(()=>{ this.router.navigate(['/'])});
  }


}