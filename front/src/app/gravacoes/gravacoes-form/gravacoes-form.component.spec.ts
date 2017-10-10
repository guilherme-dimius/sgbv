import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GravacoesFormComponent } from './gravacoes-form.component';

describe('GravacoesFormComponent', () => {
  let component: GravacoesFormComponent;
  let fixture: ComponentFixture<GravacoesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GravacoesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GravacoesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
