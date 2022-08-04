import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/panier.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {


  produits:any[] = [
    { id:1 , title:"HP Pavillion" },
    { id:2 , title:"Samsung A52" },
    { id:3 , title:"LG smart TV" },
    { id:4 , title:"SONY headphone" },
    
  ]

  // injection de service

  constructor( private panier:PanierService ) { }

  ngOnInit(): void {
  }


  ajouter(p){

    this.panier.ajouterAuPanier(p);

    
  }
}
