import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlumnCreateComponent } from './form-alumn-create.component';

describe('FormAlumnCreateComponent', () => {
  let component: FormAlumnCreateComponent;
  let fixture: ComponentFixture<FormAlumnCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAlumnCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAlumnCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
