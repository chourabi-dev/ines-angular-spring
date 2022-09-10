import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  server:string='http://localhost:8080';


  constructor(private http:HttpClient) { }


  getProductsList(){
    return this.http.get(this.server+'/api/products/list');

  }


  getCategories(){
    return this.http.get(this.server+'/api/categories/list');

  }

  addNewProduct(body){
    return this.http.post(this.server+'/api/products/add',body);

  }

  

  deleteProductById( id ){
    return this.http.delete( this.server+'/api/products/delete/'+id );
  }



}
