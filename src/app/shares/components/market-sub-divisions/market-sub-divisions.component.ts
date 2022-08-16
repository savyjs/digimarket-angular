import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

const Provinces = [
  {
    key: '1',
    title: 'آذربایجان شرقی',
  },
  {
    key: '2',
    title: 'آذربایجان غربی',
  },
  {
    key: '3',
    title: 'اردبیل',
  },
  {
    key: '4',
    title: 'اصفهان',
  },
  {
    key: '5',
    title: 'البرز',
  },
  {
    key: '6',
    title: 'ایلام',
  },
  {
    key: '7',
    title: 'بوشهر',
  },
  {
    key: '8',
    title: 'تهران',
  },
  {
    key: '9',
    title: 'چهارمحال و بختیاری',
  },
];

@Component({
  selector: 'app-market-sub-divisions',
  templateUrl: './market-sub-divisions.component.html',
  styleUrls: ['./market-sub-divisions.component.css']
})

export class MarketSubDivisionsComponent implements OnInit {
  @Input() public value: any;
  @Output() public input: any = new EventEmitter();

  divisions : any = [
    {
      key: '1',
      title: 'Asia',
      items: [{
        key: "1",
        title: "Iran",
        items: Provinces
      }]
    }
  ];
  activeDivisions: any = this.divisions;
  lastActiveDivision: any = this.divisions;
  depthLevel: number = 0;
  depthLevelItems: any = {};

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
