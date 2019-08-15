import { Component, OnInit } from '@angular/core';
import { ProductService} from './../../product.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
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

  delete(id){
    this.productservice.delete(id).subscribe(() => this.router.navigate(['admin/1/inventory']));
  }

}
