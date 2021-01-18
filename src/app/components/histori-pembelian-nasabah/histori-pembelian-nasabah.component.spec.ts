import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriPembelianNasabahComponent } from './histori-pembelian-nasabah.component';

describe('HistoriPembelianNasabahComponent', () => {
  let component: HistoriPembelianNasabahComponent;
  let fixture: ComponentFixture<HistoriPembelianNasabahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriPembelianNasabahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriPembelianNasabahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
