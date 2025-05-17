import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-welcome-search-bar',
  imports: [MatIconModule, CommonModule],
  templateUrl: './welcome-search-bar.component.html',
  styleUrl: './welcome-search-bar.component.scss'
})
export class WelcomeSearchBarComponent {
  @Input() user: any = '';
  @Output() search: any = '';

  protected isSearchInputOpen: boolean = false;

  handleToggleSearchInput() {
    this.isSearchInputOpen = !this.isSearchInputOpen;
  }

  handleSearchRecipe(event: any) {
    console.log('indexedDB:', window.indexedDB);
    this.search.emit(event.target?.value)
  }
}
