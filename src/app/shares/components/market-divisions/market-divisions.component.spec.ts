import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketDivisionsComponent } from './market-divisions.component';

describe('MarketDivisionsComponent', () => {
  let component: MarketDivisionsComponent;
  let fixture: ComponentFixture<MarketDivisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketDivisionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketDivisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
