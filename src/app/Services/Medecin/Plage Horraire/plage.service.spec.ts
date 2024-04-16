import { TestBed } from '@angular/core/testing';

import { PlageService } from './plage.service';

describe('PlageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlageService = TestBed.get(PlageService);
    expect(service).toBeTruthy();
  });
});
