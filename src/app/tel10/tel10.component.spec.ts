import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tel10Component } from './tel10.component';

describe('Tel10Component', () => {
  let component: Tel10Component;
  let fixture: ComponentFixture<Tel10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tel10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tel10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
