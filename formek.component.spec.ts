import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormekComponent } from './formek.component';

describe('FormekComponent', () => {
  let component: FormekComponent;
  let fixture: ComponentFixture<FormekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
