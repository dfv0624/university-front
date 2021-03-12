import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentDeleteComponent } from './departament-delete.component';

describe('DepartamentDeleteComponent', () => {
  let component: DepartamentDeleteComponent;
  let fixture: ComponentFixture<DepartamentDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
