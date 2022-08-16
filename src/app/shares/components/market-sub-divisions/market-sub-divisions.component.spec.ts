import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketSubDivisionsComponent } from './market-sub-divisions.component';

describe('MarketSubDivisionsComponent', () => {
  let component: MarketSubDivisionsComponent;
  let fixture: ComponentFixture<MarketSubDivisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketSubDivisionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketSubDivisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
