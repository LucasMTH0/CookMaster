import { Component, inject } from '@angular/core';
import { RecipeService } from '../../services/recipe/recipe.service';
import { CardComponent } from '../../components/card/card.component';
import { AsyncPipe } from '@angular/common';
import { UserSignal } from '../../signals/user/user';
import { MatIconModule } from '@angular/material/icon';
import {CategoryService} from '../../services/category/category.service';
import { tap } from 'rxjs';
import { IndexedDBService } from '../../services/indexedDB/indexed-db.service';

@Component({
  selector: 'app-home',
  imports: [CardComponent, AsyncPipe, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected recipeService = inject(RecipeService)
  protected categoryService = inject(CategoryService)
  protected userSignal = inject(UserSignal)
  private offlineDB = inject(IndexedDBService)
  protected user = this.userSignal.get()
  isSearchInputOpen: boolean = false
  category$ = this.categoryService.list();
  recipes$ = this.recipeService.list()
  .pipe(
    tap(async (recipes) => {
      try {
        const saveRecipesOffline = await this.offlineDB.insertRecipe(recipes)
        if(saveRecipesOffline){
          console.log("fooi! ", saveRecipesOffline)
        }

      } catch(error: any){
        console.log("deu erro: ", error)
      }
      
    })
  )



  

  handleToggleSearchInput(){
    this.isSearchInputOpen = !this.isSearchInputOpen
  }

  handleSearchRecipe(event: any){
    console.log("indexedDB:", window.indexedDB)
    // console.log("pesquisou por ", event.target?.value)
  }


}
