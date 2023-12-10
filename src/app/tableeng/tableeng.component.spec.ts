import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableengComponent } from './tableeng.component';

describe('TableengComponent', () => {
  let component: TableengComponent;
  let fixture: ComponentFixture<TableengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableengComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
