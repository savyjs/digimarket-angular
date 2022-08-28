import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, ParamMap} from "@angular/router";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public id ?: string;
  public product = {};

  constructor(route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit(): void {

  }
}
