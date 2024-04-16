import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSecretaireComponent } from './all-secretaire.component';

describe('AllSecretaireComponent', () => {
  let component: AllSecretaireComponent;
  let fixture: ComponentFixture<AllSecretaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSecretaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSecretaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
