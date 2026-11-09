import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleVisibilityPasswordButtonComponent } from './toggle-visibility-password-button.component';

describe('ToggleVisibilityPasswordButtonComponent', () => {
  let component: ToggleVisibilityPasswordButtonComponent;
  let fixture: ComponentFixture<ToggleVisibilityPasswordButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleVisibilityPasswordButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleVisibilityPasswordButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
