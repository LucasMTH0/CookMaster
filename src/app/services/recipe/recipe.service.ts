import { Injectable } from '@angular/core';
import { recipesTest } from '../../utils/recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private readonly recipes = recipesTest
  constructor() { }

  get(){
    return this.recipes
  }
}
