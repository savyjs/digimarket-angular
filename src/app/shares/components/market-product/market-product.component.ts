import {Component, Input, OnInit} from '@angular/core';
import * as _ from 'lodash';

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
    console.log('this.item:', this.item)
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
