import { PATH_CONST } from 'src/app/constants/pathConst';
import { ProductService } from './../../services/productService/product.service';
import { ProductModel } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public title: string = 'Lista spesa';

  public productListHome: ProductModel[];


  constructor(private ProductService: ProductService, private router: Router) {
    this.productListHome = this.ProductService.getProductListService();
  }

  ngOnInit(): void {}


  public modifyProduct(productId: string) {
    this.router.navigate([PATH_CONST.INSERT + '/' + productId]);
  }

  public deleteProduct(productId: string) {
    this.ProductService.deleteProductService(productId);
  }

  public receiveSearch(search:string){
this.productListHome=this.ProductService.getProductListByName_Home(search);
  }
}
