import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnacksDialogComponent } from './snacks-dialog.component';

describe('SnacksDialogComponent', () => {
  let component: SnacksDialogComponent;
  let fixture: ComponentFixture<SnacksDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnacksDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnacksDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
