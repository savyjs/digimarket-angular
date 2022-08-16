import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MarketLayoutRoutingModule} from './market-layout-routing.module';
import {MarketLayoutComponent} from './market-layout.component';
import {SvgIconsModule} from '../../components/svg-icons/svg-icons.module';
import {SvgIconsComponent} from '../../components/svg-icons/svg-icons.component';
import {MarketHeaderComponent} from '../../components/market-header/market-header.component';
import {MarketFooterComponent} from '../../components/market-footer/market-footer.component';
import {MarketSearchBoxComponent} from "../../components/market-search-box/market-search-box.component";
import {ClickedOutDirective} from '../../dircetives/clicked-out.directive';
import {MegaMenuComponent} from "../../components/mega-menu/mega-menu.component";
import {MarketNavbarComponent} from "../../components/market-navbar/market-navbar.component";
import {MegaMenuModule} from "../../components/mega-menu/mega-menu.module";
import {MarketDivisionsComponent} from "../../components/market-divisions/market-divisions.component";
import {MarketSubDivisionsComponent} from "../../components/market-sub-divisions/market-sub-divisions.component";
import {MarketDivisionsModule} from "../../components/market-divisions/market-divisions.module";
import {MarketSubDivisionsModule} from "../../components/market-sub-divisions/market-sub-divisions.module";


@NgModule({
  declarations: [
    MarketLayoutComponent,
    SvgIconsComponent,
    MarketHeaderComponent,
    MarketSearchBoxComponent,
    MarketFooterComponent,
    ClickedOutDirective,
    MegaMenuComponent,
    MarketNavbarComponent,
    MarketDivisionsComponent,
    MarketSubDivisionsComponent
  ],
  imports: [
    CommonModule,
    MarketLayoutRoutingModule,
    SvgIconsModule,
    MegaMenuModule,
    MarketDivisionsModule,
    MarketSubDivisionsModule
  ]
})
export class MarketLayoutModule {
}
