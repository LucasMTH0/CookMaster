import { Component, inject } from '@angular/core';
import { RecipeService } from '../../services/recipe/recipe.service';
import { CardComponent } from '../../components/card/card.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { UserSignal } from '../../signals/user/user';
import { MatIconModule } from '@angular/material/icon';
import { CategoryService } from '../../services/category/category.service';
import { Observable, tap } from 'rxjs';
import { IndexedDBService } from '../../services/indexedDB/indexed-db.service';
import { CategorySliderFilterComponent } from '../../components/category-slider-filter/category-slider-filter.component';

@Component({
  selector: 'app-home',
  imports: [CardComponent, AsyncPipe, MatIconModule, CommonModule, CategorySliderFilterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected recipeService = inject(RecipeService);
  protected categoryService = inject(CategoryService);
  protected userSignal = inject(UserSignal);
  private offlineDB = inject(IndexedDBService);
  protected user = this.userSignal.get();

  isSearchInputOpen: boolean = false;
  categoryOptionFilterSelected: string = '';
  category$ = this.categoryService.list();

  recipes$: any;
  recipesList: any;

  // this.recipeService.list().pipe(
  //   tap(async (recipes) => {
  //     try {
  //       const offlineRecipesList: any = await this.offlineDB.getRecipes();
  //       console.log("recipes offline: ", offlineRecipesList)
  //       if(!offlineRecipesList || offlineRecipesList.length == 0) {
  //         console.log("recipes offline: ", offlineRecipesList)
  //         const saveRecipesOffline = await this.offlineDB.insertRecipe(recipes);
  //         if (saveRecipesOffline) {
  //           console.log('fooi! ', saveRecipesOffline);
  //         }
          
  //       }
  //     } catch (error: any) {
  //       console.log('deu erro: ', error);
  //     }
  //   })
  // );


  constructor(){
    this.getRecipes()

    
  }

  async getRecipes(){
    if(navigator.onLine) {
      this.recipeService.list().subscribe(
        async (recipes) => {
          this.recipesList = recipes;
          await this.saveOfflineRecipes(recipes);
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

  async getOfflineRecipes(){
    return await this.offlineDB.getRecipes();
  }


  handleToggleSearchInput() {
    this.isSearchInputOpen = !this.isSearchInputOpen;
  }

  handleSearchRecipe(event: any) {
    console.log('indexedDB:', window.indexedDB);
    // console.log("pesquisou por ", event.target?.value)
  }

  handleChangeCategoryFilter(category: string) {
    this.categoryOptionFilterSelected = category;
  }
}
