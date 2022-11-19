import { ProductService } from './services/productService/product.service';
import { SearchComponent } from './components/home/search/search.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/home/table/table.component';
import { HomeComponent } from './components/home/home.component';
import { InsertProductComponent } from './components/insert-product/insert-product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HomeComponent,
    SearchComponent,
    InsertProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
