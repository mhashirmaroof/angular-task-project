import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubThresholdComponent } from './sub-threshold.component';

describe('SubThresholdComponent', () => {
  let component: SubThresholdComponent;
  let fixture: ComponentFixture<SubThresholdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubThresholdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubThresholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
