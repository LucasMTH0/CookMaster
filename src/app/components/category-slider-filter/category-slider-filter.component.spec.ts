import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySliderFilterComponent } from './category-slider-filter.component';

describe('CategorySliderFilterComponent', () => {
  let component: CategorySliderFilterComponent;
  let fixture: ComponentFixture<CategorySliderFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorySliderFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorySliderFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
