import { Routes } from '@angular/router';
import { CreateRecipeComponent } from './pages/recipe/create-recipe/create-recipe.component';
import { UpdateRecipeComponent } from './pages/recipe/update-recipe/update-recipe.component';
import { DetailsRecipeComponent } from './pages/recipe/details-recipe/details-recipe.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => HomeComponent
    },
    {
        path: 'auth',
        children: [
            {
                path: '/login',
                loadChildren: () => LoginComponent
            },
            {
                path: '/register',
                loadChildren: () => RegisterComponent
            }
        ]
    },
    {
        path: 'recipe',
        children: [
            {
                path: '/details/:id',
                loadChildren: () => DetailsRecipeComponent
            },
            {
                path: '/create',
                loadChildren: () => CreateRecipeComponent
            },
            {
                path: '/update',
                loadChildren: () => UpdateRecipeComponent
            }
        ]
    }
];
