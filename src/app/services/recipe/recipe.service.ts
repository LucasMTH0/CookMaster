import { Injectable } from '@angular/core';
import { recipesTest } from '../../utils/recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private readonly recipes = recipesTest
  constructor() { }

  list(){
    return this.recipes
  }

  get(id: string){
    return this.recipes.filter(recipe => recipe.id === id)[0]
  }


}
