import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-market-product-images',
  templateUrl: './market-product-images.component.html',
  styleUrls: ['./market-product-images.component.css']
})
export class MarketProductImagesComponent implements OnInit {
  @Input()
  public item: any | {};

  constructor() { }

  ngOnInit(): void {
  }

}
