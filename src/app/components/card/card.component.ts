import { Component, inject, Inject, Input } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  imports: [MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  protected router = inject(Router)
  protected readonly defaultImagePath = "assets/image/default_recipe_image.png"
  @Input() recipe: Recipe | undefined

  navigateToDetails(){
    if(this.recipe){
      this.router.navigateByUrl(`/recipe/details/${this.recipe['_id']}`)
    }
  }
}
