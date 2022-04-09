import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UrlService } from '../Services/urlService/url.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  recipes_american=[];
  recipes_brownie=[];
  recipes_banana:any;
  recipes_biscuit:any;
  recipes_chocolate_baking:any;
  recipes_fruity_cake:any;
  
  constructor(private http:HttpClient,private urlService:UrlService) {}

  ngOnInit() {
    this.getRecipeOfBiscuit()
    this.getRecipeOfChocolateBaking()
    this.getRecipeOfFruityCake()
    //this.getRecipesOfAmerican()
    this.getRecipesOfBanana()
    this.getRecipesOfBrownie()
  }
  getRecipe(id:number){
    let recipe:any[]=[]
    this.http.get(this.urlService.url_db)
    .subscribe((res:any)=>{
      res[0].data.map(r=>{
        if(r.category_id==id) recipe.push(r)
      })
      //console.log(res[0].data.filter(r=>r.category_id==id)[0]);
     // console.log(recipe);
      
    })
    console.log(recipe);
    return recipe;
    
    
  }

  getRecipesOfAmerican(){
    this.recipes_american=this.getRecipe(1)
    console.log(this.recipes_american);
  }

  getRecipesOfBrownie(){
    this.recipes_brownie=this.getRecipe(5)
    console.log(this.recipes_brownie);
    
  }
  getRecipesOfBanana(){
    this.recipes_banana=this.getRecipe(3)
  }
  getRecipeOfBiscuit(){
    this.recipes_biscuit=this.getRecipe(4)
  }
  getRecipeOfChocolateBaking(){
    this.recipes_chocolate_baking=this.getRecipe(7)
  }
  getRecipeOfFruityCake(){
    this.recipes_fruity_cake=this.getRecipe(10)
  }
}
