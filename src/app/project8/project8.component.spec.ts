import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Project8Component } from './project8.component';

describe('Project8Component', () => {
  let component: Project8Component;
  let fixture: ComponentFixture<Project8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Project8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Project8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
