import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipePagePageRoutingModule } from './recipe-page-routing.module';

import { RecipePagePage } from './recipe-page.page';
import { HttpClientModule } from '@angular/common/http';
import { UrlService } from 'src/app/Services/urlService/url.service';
import { ActivatedRoute } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipePagePageRoutingModule,
    HttpClientModule,
  ],
  declarations: [RecipePagePage,ActivatedRoute],
  providers:[UrlService]
})
export class RecipePagePageModule {}
