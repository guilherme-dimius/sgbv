import { TestBed, inject } from '@angular/core/testing';

import { CodificacaoService } from './codificacao.service';

describe('CodificacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CodificacaoService]
    });
  });

  it('should be created', inject([CodificacaoService], (service: CodificacaoService) => {
    expect(service).toBeTruthy();
  }));
});
