import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JenisReksadanaComponent } from './jenis-reksadana.component';

describe('JenisReksadanaComponent', () => {
  let component: JenisReksadanaComponent;
  let fixture: ComponentFixture<JenisReksadanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JenisReksadanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JenisReksadanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
