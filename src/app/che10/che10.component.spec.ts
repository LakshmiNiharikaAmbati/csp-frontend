import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Che10Component } from './che10.component';

describe('Che10Component', () => {
  let component: Che10Component;
  let fixture: ComponentFixture<Che10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Che10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Che10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
