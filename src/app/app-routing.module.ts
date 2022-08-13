import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: '', children: [
      {
        path: 'products',
        loadChildren: () => import('./shares/layout/market-layout/market-layout.module').then(m => m.MarketLayoutModule)
      }
    ]
  },
  {path: '**', redirectTo: '/',title:"404", pathMatch: 'full'},
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
