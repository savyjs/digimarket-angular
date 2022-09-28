import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketSwiperProductsComponent } from './market-swiper-products.component';

describe('MarketSwiperProductsComponent', () => {
  let component: MarketSwiperProductsComponent;
  let fixture: ComponentFixture<MarketSwiperProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketSwiperProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketSwiperProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
