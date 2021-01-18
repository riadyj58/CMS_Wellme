import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BobotResikoComponent } from './bobot-resiko.component';

describe('BobotResikoComponent', () => {
  let component: BobotResikoComponent;
  let fixture: ComponentFixture<BobotResikoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BobotResikoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BobotResikoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
