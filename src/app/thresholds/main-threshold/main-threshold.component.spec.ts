import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainThresholdComponent } from './main-threshold.component';

describe('MainThresholdComponent', () => {
  let component: MainThresholdComponent;
  let fixture: ComponentFixture<MainThresholdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainThresholdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainThresholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
