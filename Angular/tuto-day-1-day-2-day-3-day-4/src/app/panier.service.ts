import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private panier:any[] = [];

  constructor() { }



  ajouterAuPanier(produit){
    this.panier.push(produit);
  }


  getList(){
    return this.panier;
  }


  deleteById(id){
    for (let i = 0; i < this.panier.length; i++) {
      const elm = this.panier[i];

      if (elm.id === id) {
        this.panier.splice(i,1);
      }
      
    }
  }
}
