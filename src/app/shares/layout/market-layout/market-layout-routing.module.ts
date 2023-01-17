import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MarketLayoutComponent} from './market-layout.component';
import {ProductComponent} from "../../pages/product/product.component";

const routes: Routes = [
  {
    path: '',
    component: MarketLayoutComponent,
    children: [
      {
        path: ':id',
        data: {breadcrumb: 'نمایش محصول'},
        loadChildren: () => import('../../pages/product/product.module').then(m => m.ProductModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketLayoutRoutingModule {
}
