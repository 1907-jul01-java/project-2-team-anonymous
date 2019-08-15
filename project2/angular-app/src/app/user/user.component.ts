import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userservice: UserService, private router:Router, private activatedroute:ActivatedRoute) {
      this.checkLogin();
  }

  ngOnInit() {
  }
  
  checkLogin(){
      this.userservice.checkLogin(this.activatedroute.params['value'].id).subscribe((result)=>{
          if(result['result'] == "failure"){ this.router.navigate(['/'])}});
  }

  logout(){
      this.userservice.logout().subscribe(()=>{ this.router.navigate(['/'])});
  }


}