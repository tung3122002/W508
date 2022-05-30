import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 productList!: IProduct[];
  constructor(private productService: ProductService) {
    this.showProducts();
  } 
  productStatus: boolean = false;
  productDetail!: IProduct;
  onClick(){
    this.productStatus=!this.productStatus
  }
  // onHandleDelete(id:any) {
  //   this.productList = this.productList.filter(product => product.id !== id);
  // }
  // onHandleGetInfo(product: IProduct) {
  //   this.productDetail = product;
  //   console.log('product', product)
  // }
  // showDetail(id: any) {
  //   this.productDetail = this.productList.find(item => item.id === id)!;
  // }
  showProducts() {
    this.productService.getProducts().subscribe(data => {
      this.productList = data
    })
  }

  onRemoveItem(id: any) {
    // call api xoa
    this.productService.removeProduct(id).subscribe(() => {
      // reRender
      this.productList = this.productList.filter(item => item.id !== id);
    });
  }
  ngOnInit(): void {
  }

}
