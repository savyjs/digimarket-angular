import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {ProductComponent} from "./shares/pages/product/product.component";

const routes: Routes = [
  {
    path: '',
    data: {breadcrumb: 'خانه'},
    children: [
      {
        path: 'products',
        data: {breadcrumb: 'محصولات'},
        loadChildren: () => import('./shares/layout/market-layout/market-layout.module').then(m => m.MarketLayoutModule)
      }
    ]
  },
  {path: '**', redirectTo: '/', title: "404", pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution: 'corrected',
      initialNavigation: "enabledBlocking"
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
