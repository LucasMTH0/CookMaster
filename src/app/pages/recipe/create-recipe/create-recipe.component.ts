import { Component, inject } from '@angular/core';
import {
  FormArray,
  Validators,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
} from "@angular/forms";
import { UserSignal } from '../../../signals/user/user';
import { MatIconModule } from '@angular/material/icon';
import { RecipeService } from '../../../services/recipe/recipe.service';
import { CategoryService } from '../../../services/category/category.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-create-recipe',
  imports: [ReactiveFormsModule, MatIconModule, AsyncPipe],
  templateUrl: './create-recipe.component.html',
  styleUrl: './create-recipe.component.scss'
})
export class CreateRecipeComponent {
  private formBuilder = inject(FormBuilder)
  private userSignal = inject(UserSignal)
  private recipeService = inject(RecipeService)
  protected categoryService = inject(CategoryService);
  category$ = this.categoryService.list();
  
  protected recipeForm = this.formBuilder.group({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    ingredients: this.formBuilder.array([
      this.formBuilder.control('')
    ]),
    prepare: this.formBuilder.array([
      this.formBuilder.control('')
    ]),
    image: new FormControl('', Validators.required),
    videoTutorial: new FormControl(''),
    idCreator: new FormControl(this.userSignal.get()?.id),
    createdAt: new FormControl('')
  })

  get ingredients() {
    return this.recipeForm.get("ingredients") as FormArray;
  }
  get prepare() {
    return this.recipeForm.get("prepare") as FormArray;
  }

  addField(controlArray: FormArray) {
    controlArray.push(this.formBuilder.control(''));
  }

  convertImageToBase64(file: any): Promise<string>{
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = () => {
        const base64String = reader.result as string;
        resolve(base64String);
      };
  
      reader.onerror = (error) => {
        reject(error);
      };
  
      reader.readAsDataURL(file);
    });
  }

  async handleSelectImage(image: any){
    const input = image.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.recipeForm.controls.image.setValue(await this.convertImageToBase64(file))
    }
  }

  handleRegisterRecipe(){
    this.recipeForm.controls.createdAt.setValue(String(new Date()))
    this.recipeService.create(this.recipeForm.value).subscribe((result) => {
      console.log("result: ", result)
    })
  }
}
