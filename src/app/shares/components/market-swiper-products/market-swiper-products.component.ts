import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market-swiper-products',
  templateUrl: './market-swiper-products.component.html',
  styleUrls: ['./market-swiper-products.component.css']
})
export class MarketSwiperProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSwiper([swiper]:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
