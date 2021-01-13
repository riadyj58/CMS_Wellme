import { TestBed } from '@angular/core/testing';

import { JenisReksadanaService } from './jenis-reksadana.service';

describe('JenisReksadanaService', () => {
  let service: JenisReksadanaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JenisReksadanaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
