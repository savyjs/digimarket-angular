import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import {MarketProductComponent} from "../../components/market-product/market-product.component";


@NgModule({
  declarations: [
    ProductComponent,
    MarketProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
