import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocutoresListaComponent } from './locutores-lista.component';

describe('LocutoresListaComponent', () => {
  let component: LocutoresListaComponent;
  let fixture: ComponentFixture<LocutoresListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocutoresListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocutoresListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
