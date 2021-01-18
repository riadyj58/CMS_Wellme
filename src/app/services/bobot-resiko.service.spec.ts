import { TestBed } from '@angular/core/testing';

import { BobotResikoService } from './bobot-resiko.service';

describe('BobotResikoService', () => {
  let service: BobotResikoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BobotResikoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
