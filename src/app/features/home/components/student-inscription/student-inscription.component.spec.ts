import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInscriptionComponent } from './student-inscription.component';

describe('StudentInscriptionComponent', () => {
  let component: StudentInscriptionComponent;
  let fixture: ComponentFixture<StudentInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentInscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
