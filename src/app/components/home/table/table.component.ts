import { ProductModel } from './../../../models/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  // il figlio riceve i dati dal padre
  @Input() listaTable: ProductModel[];

  constructor() {
    this.listaTable = [];
  }

  ngOnInit(): void {
    console.log(this.listaTable);
  }

  public modifica(product: ProductModel) {}

  public cancella(Product: ProductModel) {}
}
