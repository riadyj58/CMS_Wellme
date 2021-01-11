import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoakumulasiComponent } from './promoakumulasi.component';

describe('PromoakumulasiComponent', () => {
  let component: PromoakumulasiComponent;
  let fixture: ComponentFixture<PromoakumulasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoakumulasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoakumulasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
