import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/panier.service';

@Component({
  selector: 'app-panier-page',
  templateUrl: './panier-page.component.html',
  styleUrls: ['./panier-page.component.css']
})
export class PanierPageComponent implements OnInit {

  produitAjouteeAuxPanier:any[] = [];

  constructor(private panier:PanierService) { }

  ngOnInit(): void {
   
    this.produitAjouteeAuxPanier = this.panier.getList();
    
  }

  supprimer(id){
    this.panier.deleteById(id);
  }


  

}
