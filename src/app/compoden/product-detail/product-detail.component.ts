import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import mockData from 'src/data';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail!: IProduct;

  constructor(
    private router: ActivatedRoute,
    private productService: ProductService) {
    const id = this.router.snapshot.paramMap.get('id');
    console.log(mockData)
    this.productService.getProduct(+id!).subscribe(data => this.productDetail = data)
  }

  ngOnInit(): void {
  }


}
