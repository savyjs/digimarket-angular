import {Component, OnInit} from '@angular/core';
import {BackDropService} from "../../services/backdrop/back-drop.service";

@Component({
  selector: 'app-market-layout',
  templateUrl: './market-layout.component.html',
  styleUrls: ['./market-layout.component.css'],
})

export class MarketLayoutComponent implements OnInit {
  public backdropShow = false;

  constructor(public backdropService: BackDropService) {

  }

  ngOnInit(): void {
    this.backdropService.stateObservable.subscribe(val => {
      this.backdropShow = val;
    })
  }

}
