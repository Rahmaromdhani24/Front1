import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlageComponent } from './view-plage.component';

describe('ViewPlageComponent', () => {
  let component: ViewPlageComponent;
  let fixture: ComponentFixture<ViewPlageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPlageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
