import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSecretaireComponent } from './add-secretaire.component';

describe('AddSecretaireComponent', () => {
  let component: AddSecretaireComponent;
  let fixture: ComponentFixture<AddSecretaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSecretaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSecretaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
