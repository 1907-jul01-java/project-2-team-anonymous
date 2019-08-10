import { Component, OnInit } from '@angular/core';
import { AdminService } from './../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
    admin: any = {};
  constructor(private adminservice: AdminService, private router:Router) { }

  ngOnInit() {
  }

  adminlogin(){
    this.adminservice.adminlogin(this.admin).subscribe( (result) => this.router.navigate(['/admin', result['id']]));
  }
}
