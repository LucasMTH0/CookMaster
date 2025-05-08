import { Component, inject } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-slider-filter',
  imports: [AsyncPipe, CommonModule],
  templateUrl: './category-slider-filter.component.html',
  styleUrl: './category-slider-filter.component.scss',
})
export class CategorySliderFilterComponent {
  protected categoryService = inject(CategoryService);
  
  category$ = this.categoryService.list();
  categoryOptionFilterSelected: string = '';

  handleChangeCategoryFilter(category: string) {
    this.categoryOptionFilterSelected = category;
  }
}
