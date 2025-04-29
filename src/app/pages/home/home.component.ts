import { Component, inject } from '@angular/core';
import { RecipeService } from '../../services/recipe/recipe.service';
import { CardComponent } from '../../components/card/card.component';
import { AsyncPipe } from '@angular/common';
import { UserSignal } from '../../signals/user/user';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [CardComponent, AsyncPipe, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected recipeService = inject(RecipeService)
  protected userSignal = inject(UserSignal)
  protected user = this.userSignal.get()
  isSearchInputOpen: boolean = false
  recipes$ = this.recipeService.list()

  handleToggleSearchInput(){
    this.isSearchInputOpen = !this.isSearchInputOpen
  }

  handleSearchRecipe(event: any){
    console.log("pesquisou por ", event.target?.value)
  }

  
}
