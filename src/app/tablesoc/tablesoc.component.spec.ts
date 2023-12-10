import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesocComponent } from './tablesoc.component';

describe('TablesocComponent', () => {
  let component: TablesocComponent;
  let fixture: ComponentFixture<TablesocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
