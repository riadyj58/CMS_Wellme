import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriPembelianComponent } from './histori-pembelian.component';

describe('HistoriPembelianComponent', () => {
  let component: HistoriPembelianComponent;
  let fixture: ComponentFixture<HistoriPembelianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriPembelianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriPembelianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
