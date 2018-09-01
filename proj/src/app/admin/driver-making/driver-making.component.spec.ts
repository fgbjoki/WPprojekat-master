import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverMakingComponent } from './driver-making.component';

describe('DriverMakingComponent', () => {
  let component: DriverMakingComponent;
  let fixture: ComponentFixture<DriverMakingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverMakingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverMakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
