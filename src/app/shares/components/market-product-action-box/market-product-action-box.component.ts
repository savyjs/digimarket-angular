import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-market-product-action-box',
  templateUrl: './market-product-action-box.component.html',
  styleUrls: ['./market-product-action-box.component.css']
})
export class MarketProductActionBoxComponent implements OnInit {
  @Input()
  public item: any | {};

  constructor() { }

  ngOnInit(): void {
  }

}
