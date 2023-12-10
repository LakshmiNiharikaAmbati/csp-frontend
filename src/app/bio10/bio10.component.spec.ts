import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bio10Component } from './bio10.component';

describe('Bio10Component', () => {
  let component: Bio10Component;
  let fixture: ComponentFixture<Bio10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bio10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bio10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
