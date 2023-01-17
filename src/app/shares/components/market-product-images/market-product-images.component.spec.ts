import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketProductImagesComponent } from './market-product-images.component';

describe('MarketProductImagesComponent', () => {
  let component: MarketProductImagesComponent;
  let fixture: ComponentFixture<MarketProductImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketProductImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketProductImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
