import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNABComponent } from './input-nab.component';

describe('InputNABComponent', () => {
  let component: InputNABComponent;
  let fixture: ComponentFixture<InputNABComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputNABComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNABComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
