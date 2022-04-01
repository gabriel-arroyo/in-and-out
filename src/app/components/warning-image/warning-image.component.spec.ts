import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningImageComponent } from './warning-image.component';

describe('WarningImageComponent', () => {
  let component: WarningImageComponent;
  let fixture: ComponentFixture<WarningImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
