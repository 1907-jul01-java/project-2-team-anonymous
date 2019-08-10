import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  adminlogin(admin: any= {} ){
      console.log(admin);
      return this.http.post('/project2/adminlogin', admin)
  }
}
