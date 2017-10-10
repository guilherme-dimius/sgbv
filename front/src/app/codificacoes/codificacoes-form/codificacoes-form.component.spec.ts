import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodificacoesFormComponent } from './codificacoes-form.component';

describe('CodificacoesFormComponent', () => {
  let component: CodificacoesFormComponent;
  let fixture: ComponentFixture<CodificacoesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodificacoesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodificacoesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
