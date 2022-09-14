import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketProductActionBoxComponent } from './market-product-action-box.component';

describe('MarketProductActionBoxComponent', () => {
  let component: MarketProductActionBoxComponent;
  let fixture: ComponentFixture<MarketProductActionBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketProductActionBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketProductActionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
