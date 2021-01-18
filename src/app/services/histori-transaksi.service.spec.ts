import { TestBed } from '@angular/core/testing';

import { HistoriTransaksiService } from './histori-transaksi.service';

describe('HistoriTransaksiService', () => {
  let service: HistoriTransaksiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriTransaksiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
