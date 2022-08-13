import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketSearchBoxComponent } from './market-search-box.component';

describe('MarketSearchBoxComponent', () => {
  let component: MarketSearchBoxComponent;
  let fixture: ComponentFixture<MarketSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketSearchBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
