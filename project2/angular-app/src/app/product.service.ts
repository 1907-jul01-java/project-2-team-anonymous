import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addproduct(product: any={}){
      console.log(product)
      return this.http.post('/project2/addproduct', product)
  }

  getall(){
      return this.http.get('/project2/getallproduct');
  }

  getproductbyid(id){
      return this.http.get(`/project2/getproductbyid/${id}`)
  }
}
