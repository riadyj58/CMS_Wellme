import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriPenjualanNasabahComponent } from './histori-penjualan-nasabah.component';

describe('HistoriPenjualanNasabahComponent', () => {
  let component: HistoriPenjualanNasabahComponent;
  let fixture: ComponentFixture<HistoriPenjualanNasabahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriPenjualanNasabahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriPenjualanNasabahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
