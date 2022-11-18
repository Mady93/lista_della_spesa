import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.scss'],
})
export class InsertProductComponent implements OnInit {

  //torna alla pagina precedente
  constructor(private location: Location) {}

  ngOnInit(): void {}

  public navigate() {
    this.location.back();
  }
}
