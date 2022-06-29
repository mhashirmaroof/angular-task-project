import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCatagoryComponent } from './add-catagory.component';

describe('AddCatagoryComponent', () => {
  let component: AddCatagoryComponent;
  let fixture: ComponentFixture<AddCatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCatagoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
