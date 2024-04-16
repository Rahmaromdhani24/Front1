import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlageComponent } from './edit-plage.component';

describe('EditPlageComponent', () => {
  let component: EditPlageComponent;
  let fixture: ComponentFixture<EditPlageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPlageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
