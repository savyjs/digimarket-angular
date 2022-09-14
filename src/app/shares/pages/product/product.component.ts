import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, ParamMap} from "@angular/router";
import {HttpService} from "../../services/http/http.service";
import {environment} from "../../../../environments/environment";
import {retry} from "rxjs";
import {map} from "rxjs/operators";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public id ?: number;
  public product ? = {};

  constructor(route: ActivatedRoute, private httpService: HttpService) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (this.id && !isNaN(this.id)) {
      this.httpService.getProduct(this.id).subscribe(res => {
        this.product = res;
      })
    }
  }
}
