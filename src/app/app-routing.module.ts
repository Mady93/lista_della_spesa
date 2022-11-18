import { InsertProductComponent } from './components/insert-product/insert-product.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PATH_CONST } from './constants/pathConst';

/*
Per prima cosa si crea il path per i componenti con i ruoli di pagine
 */
const routes: Routes = [
  { path: PATH_CONST.HOME, component: HomeComponent },
  { path: '', redirectTo: PATH_CONST.HOME, pathMatch: 'full' },
  {
    path: PATH_CONST.INSERT + '/:productId',
    component: InsertProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
