import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './compoden/product-detail/product-detail.component';
import { ProductsComponent } from './compoden/products/products.component';

const routes: Routes = [
  { path: "about", component: ProductsComponent },
  { path: "product/:id", component: ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
