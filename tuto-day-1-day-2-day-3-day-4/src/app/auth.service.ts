import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private connected:boolean = false;
  constructor() { }


  connect(){
    this.connected = true;
  }


  getStatus(){
    return this.connected;
    
  }
}
