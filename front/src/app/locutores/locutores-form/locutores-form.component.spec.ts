import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocutoresFormComponent } from './locutores-form.component';

describe('LocutoresFormComponent', () => {
  let component: LocutoresFormComponent;
  let fixture: ComponentFixture<LocutoresFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocutoresFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocutoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
