import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addproduct(product: any={}){
      console.log(product)
      return this.http.post('/project2/addproduct', product);
  }

  delete(id){
    console.log(id);
    return this.http.get(`/project2/delete/${id}`);
  }

  getall(){
      return this.http.get('/project2/getallproduct');
  }

  getproductbyid(id){
      return this.http.get(`/project2/getproductbyid/${id}`);
  }

  
  update(id, product: any={}){
    console.log(id);
    return this.http.post(`/project2/update/${id}`, product);
  }

}
