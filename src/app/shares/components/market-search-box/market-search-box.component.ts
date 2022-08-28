import {Component, ElementRef, Host, HostListener, inject, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {BackDropService} from "../../services/backdrop/back-drop.service";
import {BehaviorSubject, shareReplay} from "rxjs";

@Component({
  selector: 'app-market-search-box',
  templateUrl: './market-search-box.component.html',
  styleUrls: ['./market-search-box.component.css']
})

export class MarketSearchBoxComponent implements OnInit {

  tags: Array<any> = [];
  showSearchModal: BehaviorSubject<boolean> = new BehaviorSubject(false);
  inside: boolean = true

  constructor(private eRef: ElementRef, public backdropService: BackDropService) {

  }

  closeModal() {
    if (this.showSearchModal) {
      this.showSearchModal.next(false);
      this.backdropService.state.next(false);
    }
  }

  ngOnInit(): void {
    this.backdropService.stateObservable.subscribe(val => {
      if (!val && this.showSearchModal) this.showSearchModal.next(false);
    })

    this.showSearchModal.subscribe(val => {
      if (val) this.backdropService.state.next(true);
    })
  }

  ngOnDestroy() {

  }

}
