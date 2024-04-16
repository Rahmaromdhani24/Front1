import { TestBed } from '@angular/core/testing';

import { AdminMedicalService } from './admin-medical.service';

describe('AdminMedicalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminMedicalService = TestBed.get(AdminMedicalService);
    expect(service).toBeTruthy();
  });
});
