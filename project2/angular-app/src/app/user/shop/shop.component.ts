import { Component, OnInit } from '@angular/core';
import { ProductService} from './../../product.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
    products: any = {};

  constructor(private productservice: ProductService, private router:Router) { }

  ngOnInit() {
      this.getall();
  }

    getall(){
      this.productservice.getall().subscribe(result => {
        console.log(result);
        this.products = result})
    }

}
