import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportPage } from './sport.page';

describe('SportPage', () => {
  let component: SportPage;
  let fixture: ComponentFixture<SportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
