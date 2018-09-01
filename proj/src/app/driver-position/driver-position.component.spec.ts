import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverPositionComponent } from './driver-position.component';

describe('DriverPositionComponent', () => {
  let component: DriverPositionComponent;
  let fixture: ComponentFixture<DriverPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
