import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginComponent TEST', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(LoginComponent)
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Return invalid form', () =>{
    const fixture = TestBed.createComponent(LoginComponent)
    const app = fixture.componentInstance;
    fixture.detectChanges();
    let form!: NgForm;
    form.value.email = "email@test.com";
    form.value.password = "";
    const validForm = app.loginUser(form)
    expect(validForm).toBeFalse();

  })
});
