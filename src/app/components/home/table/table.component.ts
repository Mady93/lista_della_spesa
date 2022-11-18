import { ProductModel } from './../../../models/product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  // il figlio riceve i dati dal padre home
  @Input() listaTable: ProductModel[];


  //il figlio manda informazioni al padre home attraverso la classe eventEmiter
  @Output() emitModifyProduct: EventEmitter<string> = new EventEmitter();
  @Output() emitDeleteProduct: EventEmitter<string> = new EventEmitter();


  constructor() {
    this.listaTable = [];
  }

  ngOnInit(): void {
    console.log(this.listaTable);
  }


  //comunicazione figlio con il padre
  public modifica(product: ProductModel) {
    this.emitModifyProduct.emit(product.id);
  }

  public cancella(product: ProductModel) {
    this.emitDeleteProduct.emit(product.id);
  }
}
