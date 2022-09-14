import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductComponent} from './product.component';
import {MarketProductComponent} from "../../components/market-product/market-product.component";
import {AppModule} from "../../../app.module";
import {MarketProductImagesComponent} from "../../components/market-product-images/market-product-images.component";
import {MarketProductActionBoxComponent} from "../../components/market-product-action-box/market-product-action-box.component";


@NgModule({
  declarations: [
    ProductComponent,
    MarketProductComponent,
    MarketProductActionBoxComponent,
    MarketProductImagesComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    AppModule
  ]
})
export class ProductModule {
}
