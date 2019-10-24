import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJogosPage } from './add-jogos.page';

describe('AddJogosPage', () => {
  let component: AddJogosPage;
  let fixture: ComponentFixture<AddJogosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJogosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJogosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
