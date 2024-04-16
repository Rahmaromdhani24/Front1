import { TestBed } from '@angular/core/testing';

import { AdminDigitalService } from './admin-digital.service';

describe('AdminDigitalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminDigitalService = TestBed.get(AdminDigitalService);
    expect(service).toBeTruthy();
  });
});
