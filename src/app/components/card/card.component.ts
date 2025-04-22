import { Component, inject, Inject, Input } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  protected router = inject(Router)
  @Input() recipe: Recipe | undefined

  navigateToDetails(){
    this.router.navigateByUrl(`/recipe/details/${this.recipe?.id}`)
  }
}
