import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../../services/recipe/recipe.service';
import { Recipe } from '../../../interfaces/recipe';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-details-recipe',
  imports: [],
  templateUrl: './details-recipe.component.html',
  styleUrl: './details-recipe.component.scss'
})
export class DetailsRecipeComponent {
  protected route = inject(ActivatedRoute)
  private recipeService = inject(RecipeService);
  private sanitizer = inject(DomSanitizer)

  protected id = this.route.snapshot.paramMap.get('id');
  protected recipe: Recipe = this.recipeService.get(this.id as string)
  protected safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.recipe.videoTutorial);
}
