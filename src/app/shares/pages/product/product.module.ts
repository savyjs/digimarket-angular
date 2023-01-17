import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductComponent} from './product.component';
import {MarketProductComponent} from "../../components/market-product/market-product.component";
import {MarketProductImagesComponent} from "../../components/market-product-images/market-product-images.component";
import {MarketProductActionBoxComponent} from "../../components/market-product-action-box/market-product-action-box.component";
import {MarketLayoutModule} from "../../layout/market-layout/market-layout.module";
import {SwiperModule} from "swiper/angular";


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
    MarketLayoutModule,
    SwiperModule
  ]
})
export class ProductModule {
}
