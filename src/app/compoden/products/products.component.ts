import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products!: IProduct[]
  
  constructor() { }
  productStatus: boolean = false;
  productDetail!: IProduct;
  onClick(){
    this.productStatus=!this.productStatus
  }
  onHandleDelete(id:any) {
    this.products = this.products.filter(product => product.id !== id);
  }
  onHandleGetInfo(product: IProduct) {
    this.productDetail = product;
    console.log('product', product)
  }
  ngOnInit(): void {
  }

}
