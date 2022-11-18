import { ProductModel, ProductClass } from './models/product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  productInterface: ProductModel ={
    descrizione: '',
    nome: '',
    quantita: 0,
  };

  producClass :ProductClass = new ProductClass('2345','ciao');

  constructor() {
    this.productInterface = {
      descrizione: '',
      nome: '',
      quantita: 0,
    };
  }
}
