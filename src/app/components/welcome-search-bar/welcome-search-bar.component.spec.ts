import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeSearchBarComponent } from './welcome-search-bar.component';

describe('WelcomeSearchBarComponent', () => {
  let component: WelcomeSearchBarComponent;
  let fixture: ComponentFixture<WelcomeSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeSearchBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
