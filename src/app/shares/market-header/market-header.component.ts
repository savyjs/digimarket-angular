import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-market-header',
  templateUrl: './market-header.component.html',
  styleUrls: ['./market-header.component.css']
})
export class MarketHeaderComponent implements OnInit {
  tags = [];
  showSearchModal = false;
  title = '';
  logo = '/src/static/dkala/logo.svg';

  constructor() {
  }

  ngOnInit(): void {
  }

}
