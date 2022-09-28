import {Component, Input, OnChanges, OnInit} from '@angular/core';
const _ = import('lodash')

@Component({
  selector: 'app-market-swiper-products',
  templateUrl: './market-swiper-products.component.html',
  styleUrls: ['./market-swiper-products.component.css']
})
export class MarketSwiperProductsComponent implements OnInit, OnChanges {

  @Input() public items: any = null;

  public _ = _;
  constructor() {
  }


  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log({items: this.items})
  }
}
