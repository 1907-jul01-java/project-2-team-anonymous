import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    create(user: {}) {
        return this.http.post('/project2/create', user);
    }

    login(user: {}) {
        return this.http.post('/project2/login', user);
    }

    checkLogin(id){
        return this.http.get(`/project2/checklogin/${id}`);
    }

    logout(){
        return this.http.get('/project2/logout')
    }

}
