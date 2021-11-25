import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksDialogComponent } from './drinks-dialog.component';

describe('DrinksDialogComponent', () => {
  let component: DrinksDialogComponent;
  let fixture: ComponentFixture<DrinksDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinksDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
