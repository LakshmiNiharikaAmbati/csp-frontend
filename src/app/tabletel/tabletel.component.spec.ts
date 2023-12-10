import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletelComponent } from './tabletel.component';

describe('TabletelComponent', () => {
  let component: TabletelComponent;
  let fixture: ComponentFixture<TabletelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabletelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabletelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
