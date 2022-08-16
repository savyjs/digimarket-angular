import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-market-navbar',
  templateUrl: './market-navbar.component.html',
  styleUrls: ['./market-navbar.component.css']
})
export class MarketNavbarComponent implements OnInit {
  public megaMenuStatus = false;
  public showNavbar = true;
  public divisionKey = 0;
  public divisionsModal = false;
  constructor() {
  }

  ngOnInit(): void {
  }

}
