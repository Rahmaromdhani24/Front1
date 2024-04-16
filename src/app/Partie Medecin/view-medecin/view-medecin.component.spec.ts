import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMedecinComponent } from './view-medecin.component';

describe('ViewMedecinComponent', () => {
  let component: ViewMedecinComponent;
  let fixture: ComponentFixture<ViewMedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
