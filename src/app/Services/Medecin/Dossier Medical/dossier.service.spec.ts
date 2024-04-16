import { TestBed } from '@angular/core/testing';

import { DossierService } from './dossier.service';

describe('DossierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DossierService = TestBed.get(DossierService);
    expect(service).toBeTruthy();
  });
});
