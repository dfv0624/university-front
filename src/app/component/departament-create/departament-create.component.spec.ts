import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentCreateComponent } from './departament-create.component';

describe('DepartamentCreateComponent', () => {
  let component: DepartamentCreateComponent;
  let fixture: ComponentFixture<DepartamentCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
