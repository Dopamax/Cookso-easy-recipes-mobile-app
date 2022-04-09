import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowOneCategoryPage } from './show-one-category.page';

const routes: Routes = [
  {
    path: '',
    component: ShowOneCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowOneCategoryPageRoutingModule {}
