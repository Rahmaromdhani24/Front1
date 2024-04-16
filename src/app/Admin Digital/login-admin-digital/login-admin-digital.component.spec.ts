import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdminDigitalComponent } from './login-admin-digital.component';

describe('LoginAdminDigitalComponent', () => {
  let component: LoginAdminDigitalComponent;
  let fixture: ComponentFixture<LoginAdminDigitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAdminDigitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAdminDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
