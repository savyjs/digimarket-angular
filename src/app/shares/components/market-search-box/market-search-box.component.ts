import {Component, ElementRef, Host, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-market-search-box',
  templateUrl: './market-search-box.component.html',
  styleUrls: ['./market-search-box.component.css']
})
export class MarketSearchBoxComponent implements OnInit {
  tags: Array<any> = [];
  showSearchModal: boolean = false;
  inside: boolean = true

  constructor(private eRef: ElementRef) {
  }

  closeModal() {
    if (this.showSearchModal) this.showSearchModal = false;
  }

  ngOnInit(): void {
  }

}
