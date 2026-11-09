import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-visibility-password-button',
  imports: [],
  templateUrl: './toggle-visibility-password-button.component.html',
  styleUrl: './toggle-visibility-password-button.component.scss'
})
export class ToggleVisibilityPasswordButtonComponent {
  @Output() emitToggle = new EventEmitter();
  protected showPassword: boolean = false;

  togglePasswordVisibility(){
    this.showPassword = !this.showPassword;
    this.emitToggle.emit(this.showPassword)
  }
}
