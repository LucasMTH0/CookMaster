import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from "@angular/forms";

@Component({
  selector: 'app-create-recipe',
  imports: [ReactiveFormsModule],
  templateUrl: './create-recipe.component.html',
  styleUrl: './create-recipe.component.scss'
})
export class CreateRecipeComponent {
  private formBuilder = inject(FormBuilder)
  protected recipeForm = this.formBuilder.group({
    name: new FormControl(['', Validators.required]),
    description: new FormControl(['', Validators.required]),
    ingredients: this.formBuilder.array([
      this.formBuilder.group({ name: ''})
    ]),
    prepare: this.formBuilder.array([
      this.formBuilder.group({ name: ''})
    ]),
    image: new FormControl(''),
    videoTutorial: new FormControl(''),
    createdAt: new FormControl('')
  })

  get ingredientsFields(): FormArray {
    return this.recipeForm.get("ingredients") as FormArray;
  }

  
  get prepareFields(): FormArray {
    return this.recipeForm.get("prepare") as FormArray;
  }

  addField(value: string, field: FormArray ) {
    const fieldGroup = this.formBuilder.group({
      name: value
    });
    field.push(fieldGroup);
  }

}
