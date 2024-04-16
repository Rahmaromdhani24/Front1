import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendevousComponent } from './rendevous.component';

describe('RendevousComponent', () => {
  let component: RendevousComponent;
  let fixture: ComponentFixture<RendevousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendevousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendevousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
