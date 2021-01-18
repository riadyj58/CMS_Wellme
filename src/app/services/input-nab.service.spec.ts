import { TestBed } from '@angular/core/testing';

import { InputNABService } from './input-nab.service';

describe('InputNABService', () => {
  let service: InputNABService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputNABService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
