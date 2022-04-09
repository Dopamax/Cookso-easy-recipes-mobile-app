import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowOneCategoryPageRoutingModule } from './show-one-category-routing.module';

import { ShowOneCategoryPage } from './show-one-category.page';
import { HttpClientModule } from '@angular/common/http';
import { CardRecipeComponent } from 'src/app/Components/card-recipe/card-recipe.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowOneCategoryPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ShowOneCategoryPage,CardRecipeComponent]
})
export class ShowOneCategoryPageModule {}
