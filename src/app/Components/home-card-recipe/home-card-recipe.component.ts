import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-card-recipe',
  templateUrl: './home-card-recipe.component.html',
  styleUrls: ['./home-card-recipe.component.scss'],
})
export class HomeCardRecipeComponent implements OnInit {
  @Input() recipe:any;
  constructor() { }

  ngOnInit() {  
    if (this.recipe.title.length>20) {
      this.recipe.title=this.recipe.title.toString().substr(0,20)+"..."
    }}

}
