import { Component, inject } from '@angular/core';
import { RecipeService } from '../../services/recipe/recipe.service';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected recipeService = inject(RecipeService)

}
