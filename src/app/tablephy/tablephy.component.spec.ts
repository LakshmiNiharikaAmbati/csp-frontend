import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablephyComponent } from './tablephy.component';

describe('TablephyComponent', () => {
  let component: TablephyComponent;
  let fixture: ComponentFixture<TablephyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablephyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablephyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
