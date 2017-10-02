import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecasListaComponent } from './bibliotecas-lista.component';

describe('BibliotecassListaComponent', () => {
  let component: BibliotecasListaComponent;
  let fixture: ComponentFixture<BibliotecasListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibliotecasListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
