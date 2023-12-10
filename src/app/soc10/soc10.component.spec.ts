import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Soc10Component } from './soc10.component';

describe('Soc10Component', () => {
  let component: Soc10Component;
  let fixture: ComponentFixture<Soc10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Soc10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Soc10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
