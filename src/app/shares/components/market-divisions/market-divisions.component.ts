import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market-divisions',
  templateUrl: './market-divisions.component.html',
  styleUrls: ['./market-divisions.component.css']
})
export class MarketDivisionsComponent implements OnInit {
  public divisionKey = 0;
  public divisionsModal = false;
  constructor() { }

  ngOnInit(): void {
  }

}
