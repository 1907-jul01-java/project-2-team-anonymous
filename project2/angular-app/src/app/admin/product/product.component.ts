import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    product: any = {};
    
  constructor(private productservice: ProductService, private router: Router) { }

  ngOnInit() {
  }

  addproduct(){
      this.productservice.addproduct(this.product).subscribe(this.router.navigate['admin/1/product']);
  }

<<<<<<< HEAD
  delete(){
    this.productservice.delete(this.product).subscribe();
  }

=======
>>>>>>> JackieBranch
}
