import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-market-navbar',
  templateUrl: './market-navbar.component.html',
  styleUrls: ['./market-navbar.component.css']
})
export class MarketNavbarComponent implements OnInit {
  public megaMenuStatus = false;
  public showNavbar = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}
