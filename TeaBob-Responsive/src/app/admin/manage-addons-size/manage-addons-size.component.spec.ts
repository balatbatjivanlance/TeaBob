import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAddonsSizeComponent } from './manage-addons-size.component';

describe('ManageAddonsSizeComponent', () => {
  let component: ManageAddonsSizeComponent;
  let fixture: ComponentFixture<ManageAddonsSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAddonsSizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAddonsSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
