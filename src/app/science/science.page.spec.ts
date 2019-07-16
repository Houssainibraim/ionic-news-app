import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SciencePage } from './science.page';

describe('SciencePage', () => {
  let component: SciencePage;
  let fixture: ComponentFixture<SciencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SciencePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SciencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
