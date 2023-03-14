import { TestBed } from '@angular/core/testing';

import { BpheroService } from './bphero.service';

describe('BpheroService', () => {
  let service: BpheroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BpheroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
