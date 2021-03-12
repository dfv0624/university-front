import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentEditComponent } from './departament-edit.component';

describe('DepartamentEditComponent', () => {
  let component: DepartamentEditComponent;
  let fixture: ComponentFixture<DepartamentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
