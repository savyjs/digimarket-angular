import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketLayoutRoutingModule } from './market-layout-routing.module';
import { MarketLayoutComponent } from './market-layout.component';
import { SvgIconsModule } from '../../components/svg-icons/svg-icons.module';
import { SvgIconsComponent } from '../../components/svg-icons/svg-icons.component';
import { MarketHeaderComponent } from '../../components/market-header/market-header.component';
import { MarketFooterComponent } from '../../components/market-footer/market-footer.component';
import {MarketSearchBoxComponent} from "../../components/market-search-box/market-search-box.component";
import { ClickedOutDirective } from '../../dircetives/clicked-out.directive';
import {MegaMenuComponent} from "../../components/mega-menu/mega-menu.component";
import {MarketNavbarComponent} from "../../components/market-navbar/market-navbar.component";
import {MegaMenuModule} from "../../components/mega-menu/mega-menu.module";


@NgModule({
  declarations: [
    MarketLayoutComponent,
    SvgIconsComponent,
    MarketHeaderComponent,
    MarketSearchBoxComponent,
    MarketFooterComponent,
    ClickedOutDirective,
    MegaMenuComponent,
    MarketNavbarComponent
  ],
  imports: [
    CommonModule,
    MarketLayoutRoutingModule,
    SvgIconsModule,
    MegaMenuModule
  ]
})
export class MarketLayoutModule { }
