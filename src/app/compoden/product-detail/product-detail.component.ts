import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/Product';
import mockData from 'src/data';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail!: IProduct;

  constructor(private router: ActivatedRoute) {
    const id = this.router.snapshot.paramMap.get('id');
    console.log(mockData)
    this.productDetail = mockData.find(item => item.id == +id!)!;
  }

  ngOnInit(): void {
  }


}
