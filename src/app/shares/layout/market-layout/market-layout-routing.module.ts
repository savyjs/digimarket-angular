import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MarketLayoutComponent} from './market-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MarketLayoutComponent,
    children: [
      {path: ':id', loadChildren: () => import('../../pages/product/product.module').then(m => m.ProductModule)},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketLayoutRoutingModule {
}
