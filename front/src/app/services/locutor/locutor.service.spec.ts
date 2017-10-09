import { TestBed, inject } from '@angular/core/testing';

import { LocutorService } from './locutor.service';

describe('LocutorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocutorService]
    });
  });

  it('should be created', inject([LocutorService], (service: LocutorService) => {
    expect(service).toBeTruthy();
  }));
});
