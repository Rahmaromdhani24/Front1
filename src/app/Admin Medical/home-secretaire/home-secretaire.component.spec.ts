import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSecretaireComponent } from './home-secretaire.component';

describe('HomeSecretaireComponent', () => {
  let component: HomeSecretaireComponent;
  let fixture: ComponentFixture<HomeSecretaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSecretaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSecretaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
