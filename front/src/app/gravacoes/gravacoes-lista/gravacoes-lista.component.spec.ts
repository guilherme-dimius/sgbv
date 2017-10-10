import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GravacoesListaComponent } from './gravacoes-lista.component';

describe('GravacoesListaComponent', () => {
  let component: GravacoesListaComponent;
  let fixture: ComponentFixture<GravacoesListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GravacoesListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GravacoesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
