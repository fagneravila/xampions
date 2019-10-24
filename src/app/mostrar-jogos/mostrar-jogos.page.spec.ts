import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarJogosPage } from './mostrar-jogos.page';

describe('MostrarJogosPage', () => {
  let component: MostrarJogosPage;
  let fixture: ComponentFixture<MostrarJogosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarJogosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarJogosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
