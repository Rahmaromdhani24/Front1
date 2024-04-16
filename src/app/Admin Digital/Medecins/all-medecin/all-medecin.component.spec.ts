import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMedecinComponent } from './all-medecin.component';

describe('AllMedecinComponent', () => {
  let component: AllMedecinComponent;
  let fixture: ComponentFixture<AllMedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
