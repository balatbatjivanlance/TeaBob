import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsTodayComponent } from './items-today.component';

describe('ItemsTodayComponent', () => {
  let component: ItemsTodayComponent;
  let fixture: ComponentFixture<ItemsTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
