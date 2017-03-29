import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Project7Component } from './project7.component';

describe('Project7Component', () => {
  let component: Project7Component;
  let fixture: ComponentFixture<Project7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Project7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Project7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
