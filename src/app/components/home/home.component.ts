import { ProductService } from './../../services/productService/product.service';
import { ProductModel } from './../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public title:string = 'lista spesa';

  public productListHome: ProductModel[];

  constructor(
    private ProductService:ProductService
  ){

    this.productListHome = this.ProductService.getProductListService();

  }
  ngOnInit(): void {
  }
}
