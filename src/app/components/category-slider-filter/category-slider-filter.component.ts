import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import {
  faBowlFood,
  faDrumstickBite,
  faCow,
  faFish,
  faLeaf,
  faMugHot,
  faCarrot,
  faSeedling,
  faScaleBalanced,
  faIceCream,
  faCakeCandles,
  faBreadSlice,
  faCoffee,
  faHamburger,
  faGlassWater,
  faHotdog,
  faDumbbell
} from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { map, Observable, tap } from 'rxjs';
import { categoriesIconsList } from '../../utils/categories-icons-list'
@Component({
  selector: 'app-category-slider-filter',
  imports: [
    AsyncPipe, 
    CommonModule, 
    FontAwesomeModule
  ],
  templateUrl: './category-slider-filter.component.html',
  styleUrl: './category-slider-filter.component.scss',
})
export class CategorySliderFilterComponent {
  protected categoryService = inject(CategoryService);
  @Output() categorySelected = new EventEmitter();
  categoryOptionFilterSelected: string = '';
  category$: Observable<any> = this.categoryService.list()
  // .pipe(
  //   map((categories: any) => {
  //       categories.map((category: any) => (
  //         {
          
  //           ...category,
  //           icon: categoriesIconsList[category.name]
          
  //         }
  //       ) )
  //     }
  //   )
  // );

  constructor(private iconLibrary: FaIconLibrary) {
    this.iconLibrary.addIcons(
      faBowlFood,
      faDrumstickBite,
      faCow,
      faFish,
      faLeaf,
      faMugHot,
      faCarrot,
      faSeedling,
      faScaleBalanced,
      faIceCream,
      faCakeCandles,
      faBreadSlice,
      faCoffee,
      faHamburger,
      faGlassWater,
      faHotdog,
      faDumbbell
    );
  }


  handleChangeCategoryFilter(category: string) {
    this.categoryOptionFilterSelected = category;
    this.categorySelected.emit(category)
  }
}
