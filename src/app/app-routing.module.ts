import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'start-page',
    pathMatch: 'full'
  },
  {
    path: 'show-one-category/:id',
    loadChildren: () => import('./Pages/show-one-category/show-one-category.module').then( m => m.ShowOneCategoryPageModule)
  },
  {
    path: 'recipe-page/:id',
    loadChildren: () => import('./Pages/recipe-page/recipe-page.module').then( m => m.RecipePagePageModule)
  },
  {
    path: 'start-page',
    loadChildren: () => import('./Pages/start-page/start-page.module').then( m => m.StartPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
