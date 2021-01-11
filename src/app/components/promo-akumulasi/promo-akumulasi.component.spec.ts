import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoAkumulasiComponent } from './promo-akumulasi.component';

describe('PromoAkumulasiComponent', () => {
  let component: PromoAkumulasiComponent;
  let fixture: ComponentFixture<PromoAkumulasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoAkumulasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoAkumulasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
