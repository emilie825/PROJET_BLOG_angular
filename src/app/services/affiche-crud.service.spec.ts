import { TestBed } from '@angular/core/testing';

import { AfficheCrudService } from './affiche-crud.service';

describe('AfficheCrudService', () => {
  let service: AfficheCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfficheCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
