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

}
