import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriPenjualanComponent } from './histori-penjualan.component';

describe('HistoriPenjualanComponent', () => {
  let component: HistoriPenjualanComponent;
  let fixture: ComponentFixture<HistoriPenjualanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriPenjualanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriPenjualanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
