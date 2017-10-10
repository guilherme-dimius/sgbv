import { TestBed, inject } from '@angular/core/testing';

import { GravacaoService } from './gravacao.service';

describe('GravacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GravacaoService]
    });
  });

  it('should be created', inject([GravacaoService], (service: GravacaoService) => {
    expect(service).toBeTruthy();
  }));
});
