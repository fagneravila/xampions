import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAtletasPage } from './add-atletas.page';

describe('AddAtletasPage', () => {
  let component: AddAtletasPage;
  let fixture: ComponentFixture<AddAtletasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAtletasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAtletasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
