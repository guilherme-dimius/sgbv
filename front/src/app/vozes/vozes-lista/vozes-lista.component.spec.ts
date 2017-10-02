import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VozesListaComponent } from './vozes-lista.component';

describe('VozesListaComponent', () => {
  let component: VozesListaComponent;
  let fixture: ComponentFixture<VozesListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VozesListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VozesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
