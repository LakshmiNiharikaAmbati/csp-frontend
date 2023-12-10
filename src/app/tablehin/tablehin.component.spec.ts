import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablehinComponent } from './tablehin.component';

describe('TablehinComponent', () => {
  let component: TablehinComponent;
  let fixture: ComponentFixture<TablehinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablehinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablehinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
