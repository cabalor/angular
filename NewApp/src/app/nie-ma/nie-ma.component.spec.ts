import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NieMaComponent } from './nie-ma.component';

describe('NieMaComponent', () => {
  let component: NieMaComponent;
  let fixture: ComponentFixture<NieMaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NieMaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NieMaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
