import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodificacoesListaComponent } from './codificacoes-lista.component';

describe('CodificacoesListaComponent', () => {
  let component: CodificacoesListaComponent;
  let fixture: ComponentFixture<CodificacoesListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodificacoesListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodificacoesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
