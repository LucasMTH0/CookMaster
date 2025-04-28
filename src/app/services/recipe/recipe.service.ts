import { inject, Injectable } from '@angular/core';
import { recipesTest } from '../../utils/recipes';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../../interfaces/recipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private http = inject(HttpClient);
  private readonly recipes = recipesTest;
  private readonly API = 'http://localhost:3009'

  list(){
    return this.http.get(this.API+'/recipe')
  }

  get(id: string): Observable<Recipe>{
    return this.http.get<Recipe>(this.API+'/recipe/'+id)
  }

  create(recipe: any){
    return this.http.post(this.API+'/recipe/new', recipe)
  }


}
