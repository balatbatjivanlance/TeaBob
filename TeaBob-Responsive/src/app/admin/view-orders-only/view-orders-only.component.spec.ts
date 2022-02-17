import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrdersOnlyComponent } from './view-orders-only.component';

describe('ViewOrdersOnlyComponent', () => {
  let component: ViewOrdersOnlyComponent;
  let fixture: ComponentFixture<ViewOrdersOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrdersOnlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrdersOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
