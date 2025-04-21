import { Component, Input } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() recipe: Recipe | undefined
}
