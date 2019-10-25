import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNumerosPage } from './add-numeros.page';

describe('AddNumerosPage', () => {
  let component: AddNumerosPage;
  let fixture: ComponentFixture<AddNumerosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNumerosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNumerosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
