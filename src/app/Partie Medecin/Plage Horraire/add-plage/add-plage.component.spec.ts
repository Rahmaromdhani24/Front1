import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlageComponent } from './add-plage.component';

describe('AddPlageComponent', () => {
  let component: AddPlageComponent;
  let fixture: ComponentFixture<AddPlageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
