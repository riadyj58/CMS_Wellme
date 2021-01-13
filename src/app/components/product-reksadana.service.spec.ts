import { TestBed } from '@angular/core/testing';

import { ProductReksadanaService } from './product-reksadana.service';

describe('ProductReksadanaService', () => {
  let service: ProductReksadanaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductReksadanaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
