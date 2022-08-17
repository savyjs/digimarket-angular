import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-market-product',
  templateUrl: './market-product.component.html',
  styleUrls: ['./market-product.component.css']
})
export class MarketProductComponent implements OnInit {

  @Input()
  public item: any | {};

  constructor() {
  }

  ngOnInit(): void {
  }

}
