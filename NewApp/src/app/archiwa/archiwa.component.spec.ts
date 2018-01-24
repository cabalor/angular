import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiwaComponent } from './archiwa.component';

describe('ArchiwaComponent', () => {
  let component: ArchiwaComponent;
  let fixture: ComponentFixture<ArchiwaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiwaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
