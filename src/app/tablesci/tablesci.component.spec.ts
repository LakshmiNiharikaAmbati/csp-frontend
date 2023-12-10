import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesciComponent } from './tablesci.component';

describe('TablesciComponent', () => {
  let component: TablesciComponent;
  let fixture: ComponentFixture<TablesciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
