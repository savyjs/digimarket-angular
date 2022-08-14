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


@NgModule({
  declarations: [
    MarketLayoutComponent,
    SvgIconsComponent,
    MarketHeaderComponent,
    MarketSearchBoxComponent,
    MarketFooterComponent,
    ClickedOutDirective
  ],
  imports: [
    CommonModule,
    MarketLayoutRoutingModule,
    SvgIconsModule
  ]
})
export class MarketLayoutModule { }
