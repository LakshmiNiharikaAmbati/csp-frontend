import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ps10Component } from './ps10.component';

describe('Ps10Component', () => {
  let component: Ps10Component;
  let fixture: ComponentFixture<Ps10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ps10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ps10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
