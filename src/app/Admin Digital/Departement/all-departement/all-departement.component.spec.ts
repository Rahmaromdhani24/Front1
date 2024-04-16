import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDepartementComponent } from './all-departement.component';

describe('AllDepartementComponent', () => {
  let component: AllDepartementComponent;
  let fixture: ComponentFixture<AllDepartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDepartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
