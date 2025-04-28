import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../../services/recipe/recipe.service';
import { Recipe } from '../../../interfaces/recipe';
import { DomSanitizer } from '@angular/platform-browser';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details-recipe',
  imports: [AsyncPipe],
  templateUrl: './details-recipe.component.html',
  styleUrl: './details-recipe.component.scss'
})
export class DetailsRecipeComponent {
  protected route = inject(ActivatedRoute)
  private recipeService = inject(RecipeService);
  private sanitizer = inject(DomSanitizer)

  protected id = this.route.snapshot.paramMap.get('id');

  protected recipe$: Observable<Recipe> = this.recipeService.get(this.id as string)

  // constructor(){
  //   this.recipeService.get(this.id as string).subscribe((recipes) => {
  //     console.log("recipes: ", recipes)
  //   })
  // }
  // protected safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.recipe.videoTutorial);
}
