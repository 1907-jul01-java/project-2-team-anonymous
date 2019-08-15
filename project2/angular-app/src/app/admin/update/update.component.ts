import { Component, OnInit } from '@angular/core';
import { ProductService} from './../../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  product: any = {};
  updateproduct: any = {};

  constructor(private productservice: ProductService, private router:Router, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.getproductbyid();
  }

  getproductbyid() {
    this.productservice.getproductbyid(this.activatedroute.params['value'].id).subscribe(result => this.product = result)
  }

  update(id) {
    this.productservice.update(id,this.updateproduct).subscribe();
  }

}
