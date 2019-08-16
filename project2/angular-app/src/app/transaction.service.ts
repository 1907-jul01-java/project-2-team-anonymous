import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  addToCart(id){
      return this.http.get(`project2/addtocart/${id}`)
  }

  checkOut(id, totalcost){
      console.log(id,totalcost);
      return this.http.post(`project2/checkout/${id}`, {"totalcost": totalcost})
  }
}
