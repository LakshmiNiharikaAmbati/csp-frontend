import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eng10Component } from './eng10.component';

describe('Eng10Component', () => {
  let component: Eng10Component;
  let fixture: ComponentFixture<Eng10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Eng10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eng10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
