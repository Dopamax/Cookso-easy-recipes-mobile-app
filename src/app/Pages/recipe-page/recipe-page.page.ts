import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlService } from 'src/app/Services/urlService/url.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.page.html',
  styleUrls: ['./recipe-page.page.scss'],
})
export class RecipePagePage implements OnInit {
  id:number;
  recipe=[];
  segmentModel:string="ingredients";
  constructor(private router:ActivatedRoute,private http:HttpClient,private urlService:UrlService) { }

  ngOnInit() {
    this.router.params.subscribe(res=>{
      this.id=res.id;
      console.log(this.id);
      this.getRecipe();
    })
    
  }

  getRecipe(){
    this.http.get(this.urlService.url_db)
    .subscribe((res:any)=>{
      this.recipe=res[0].data.filter(r=>r.id==this.id)[0];
      console.log(res[0].data.filter(r=>r.id==this.id)[0]);
      console.log(this.recipe);
      
    })
  }

}
