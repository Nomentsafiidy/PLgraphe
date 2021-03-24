import { TestBed } from '@angular/core/testing';

import { ContrainteService } from './contrainte.service';

describe('ContrainteService', () => {
  let service: ContrainteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContrainteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
