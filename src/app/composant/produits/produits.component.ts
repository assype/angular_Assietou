import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  nom: String;
  prix: number;

  constructor() {
    this.nom = 'lait';
    this.prix = 30;
   }

  ngOnInit(): void {
  }

  
}
