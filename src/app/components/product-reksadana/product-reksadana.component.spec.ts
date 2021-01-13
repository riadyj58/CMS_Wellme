import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReksadanaComponent } from './product-reksadana.component';

describe('ProductReksadanaComponent', () => {
  let component: ProductReksadanaComponent;
  let fixture: ComponentFixture<ProductReksadanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductReksadanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductReksadanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
