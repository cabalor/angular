import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProduktyComponent } from './admin-produkty.component';

describe('AdminProduktyComponent', () => {
  let component: AdminProduktyComponent;
  let fixture: ComponentFixture<AdminProduktyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProduktyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProduktyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
