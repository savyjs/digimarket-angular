import {Component, Input, OnInit} from '@angular/core';
import * as _ from 'lodash';
import Swiper from "swiper";

@Component({
  selector: 'app-market-product',
  templateUrl: './market-product.component.html',
  styleUrls: ['./market-product.component.css']
})
export class MarketProductComponent implements OnInit {

  @Input()
  public item: any | {};
  public _ = _;
  public variantsCount = 5;

  constructor() {
  }

  ngOnInit(): void {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      slidesPerView: 7,

      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      breakpoints: {
        769: {
          slidesPerView: 6,
          slidesPerGroup: 4
        }
      }
    });

  }


  pickTextColorBasedOnBgColorSimple(bgColor: string, lightColor = '#FFF', darkColor = '#000') {
    var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
    var r = parseInt(color.substring(0, 2), 16); // hexToR
    var g = parseInt(color.substring(2, 4), 16); // hexToG
    var b = parseInt(color.substring(4, 6), 16); // hexToB
    return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
      darkColor : lightColor;
  }

}
