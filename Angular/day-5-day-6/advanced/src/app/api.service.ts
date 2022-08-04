import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient ) { }



  getUserListFromServer(){
    const url ='https://jsonplaceholder.typicode.com/users';
    return this.http.get(url);
  }
}
