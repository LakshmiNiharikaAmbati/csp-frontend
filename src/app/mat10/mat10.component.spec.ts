import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mat10Component } from './mat10.component';

describe('Mat10Component', () => {
  let component: Mat10Component;
  let fixture: ComponentFixture<Mat10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mat10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mat10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
