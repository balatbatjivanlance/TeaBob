import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAddonsComponent } from './update-addons.component';

describe('UpdateAddonsComponent', () => {
  let component: UpdateAddonsComponent;
  let fixture: ComponentFixture<UpdateAddonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAddonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAddonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
