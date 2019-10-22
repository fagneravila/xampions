import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTimesPage } from './add-times.page';

describe('AddTimesPage', () => {
  let component: AddTimesPage;
  let fixture: ComponentFixture<AddTimesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTimesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTimesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
