import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackcommentComponent } from './snackcomment.component';

describe('SnackcommentComponent', () => {
  let component: SnackcommentComponent;
  let fixture: ComponentFixture<SnackcommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackcommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
