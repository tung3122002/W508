import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './compoden/banner/banner.component';
import { NavComponent } from './compoden/nav/nav.component';
import { ProductsComponent } from './compoden/products/products.component';
import { ProductAddComponent } from './compoden/product-add/product-add.component';
import { ProductDetailComponent } from './compoden/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
