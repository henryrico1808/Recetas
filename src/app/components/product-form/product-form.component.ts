import { Component, OnInit } from '@angular/core';

import {ProductService} from '../../services/product.service';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product = {} as Product;

  constructor(public ProductService: ProductService){

  }

  ngOnInit() {
    
  }

  addProduct(){
    if (this.product.name !== '' && this.product.description !== '' &&
    this.product.price != 0) {
      this.ProductService.addProduct(this.product);
      this.product = {} as Product;

    }
   
  }

}
