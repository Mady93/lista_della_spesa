import { Injectable } from '@angular/core';
import { Mock_Product } from 'src/app/mocks/mock_products';
import { ProductModel } from 'src/app/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productListService: ProductModel[];

  constructor() {
    this.productListService = Mock_Product.ProductListMock;
  }

  public addProductService(product: ProductModel) {
    this.productListService.push(product);
  }

  public deleteProductService(id: string) {
    this.productListService.forEach((res, index) => {
      if (res.id === id) {
        this.productListService.splice(index, 1);
        console.log('prodotto eliminato');
      }
    });
  }

  public modificaProductService(product: ProductModel) {
    this.productListService.forEach((res, index) => {
      if (res.id === product.id) {
        this.productListService.splice(index, 1, product);
        console.log('prodotto modificato');
      }
    });
  }

  public getProductListService() {
    return this.productListService;
  }
}
