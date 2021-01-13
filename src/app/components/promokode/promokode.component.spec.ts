import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromokodeComponent } from './promokode.component';

describe('PromokodeComponent', () => {
  let component: PromokodeComponent;
  let fixture: ComponentFixture<PromokodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromokodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromokodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
