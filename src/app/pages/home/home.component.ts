import { Component, inject } from '@angular/core';
import { RecipeService } from '../../services/recipe/recipe.service';
import { CardComponent } from '../../components/card/card.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { UserSignal } from '../../signals/user/user';
import { MatIconModule } from '@angular/material/icon';
import { CategoryService } from '../../services/category/category.service';
import { IndexedDBService } from '../../services/indexedDB/indexed-db.service';
import { CategorySliderFilterComponent } from '../../components/category-slider-filter/category-slider-filter.component';
import { WelcomeSearchBarComponent } from '../../components/welcome-search-bar/welcome-search-bar.component';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MatIconModule, 
    CardComponent,
    CategorySliderFilterComponent, 
    WelcomeSearchBarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected recipeService = inject(RecipeService);
  protected categoryService = inject(CategoryService);
  private loadingService = inject(LoadingService);
  protected userSignal = inject(UserSignal);
  private offlineDB = inject(IndexedDBService);
  protected user = this.userSignal.get();

  categoryOptionFilterSelected: string = '';
  category$ = this.categoryService.list();
  recipes$: any;
  recipesList: any;
  recipesListCopy: any;

  constructor(){
    this.getRecipes()
  }

  async getRecipes(){
    if(navigator.onLine) {
      this.loadingService.open()
      this.recipeService.list().subscribe(
        async (recipes) => {
          this.recipesList = recipes;
          await this.saveOfflineRecipes(recipes);
          this.loadingService.close()
        }
      )
    } else {
      this.recipesList = await this.getOfflineRecipes() 
    }
  }

  async saveOfflineRecipes(recipes: any){
    const offlineRecipesList: any = await this.getOfflineRecipes()
    if(
      offlineRecipesList.length == 0 || 
      offlineRecipesList < recipes.length
    ) {
      await this.offlineDB.insertRecipe(recipes);
    }
  }

  getFilteredRecipes(){
    if(this.categoryOptionFilterSelected.length > 0){
      return this.recipesList.filter((recipe: any) => {
        return recipe.category.toLowerCase().includes(this.categoryOptionFilterSelected.toLowerCase())
      })
    }
    return this.recipesList;
  }

  handleFilterRecipesByCategory(category: string){
    this.categoryOptionFilterSelected = category;
    	console.log("categoria: ", category)
  }

  async getOfflineRecipes(){
    return await this.offlineDB.getRecipes();
  }



}
