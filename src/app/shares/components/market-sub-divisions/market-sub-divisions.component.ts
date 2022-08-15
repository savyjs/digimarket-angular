import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-market-sub-divisions',
  templateUrl: './market-sub-divisions.component.html',
  styleUrls: ['./market-sub-divisions.component.css']
})
export class MarketSubDivisionsComponent implements OnInit {
  @Input() public value: any;
  @Output() public input: any = new EventEmitter();

  activeDivisions: any = [];
  lastActiveDivision: any = [];
  depthLevel: number = 0;
  depthLevelItems: any = [];

  constructor() {
  }

  unselectDivision() {
    this.depthLevel--;
    this.activeDivisions = this.depthLevelItems[this.depthLevel];
  }

  selectDivision(item: any, key: number) {
    if (item?.items) {
      this.lastActiveDivision = this.activeDivisions;
      this.depthLevelItems[this.depthLevel] = this.lastActiveDivision;
      this.activeDivisions = item.items;
      this.depthLevel++;
    } else {
      this.input.emit('input', item?.id || item?.key);
    }
  }

  ngOnInit(): void {
  }

}
