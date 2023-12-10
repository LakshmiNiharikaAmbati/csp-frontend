import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hin10Component } from './hin10.component';

describe('Hin10Component', () => {
  let component: Hin10Component;
  let fixture: ComponentFixture<Hin10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hin10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hin10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
