import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTimesPage } from './mostrar-times.page';

describe('MostrarTimesPage', () => {
  let component: MostrarTimesPage;
  let fixture: ComponentFixture<MostrarTimesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarTimesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarTimesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
