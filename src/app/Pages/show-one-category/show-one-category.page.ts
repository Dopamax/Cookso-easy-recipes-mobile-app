import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import "../../../assets/json/recipses.json";
@Component({
  selector: 'app-show-one-category',
  templateUrl: './show-one-category.page.html',
  styleUrls: ['./show-one-category.page.scss'],
})
export class ShowOneCategoryPage implements OnInit {
  id:number;
  recipes:any;
 url_db="../../../assets/json/recipses.json";
  constructor(private router:ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {
    this.router.params.subscribe(res=>{
    this.id=res.id;
    console.log(this.id);
    this.getRecipes();
    });
  }

  getRecipes(){
    this.http.get(this.url_db)
    .subscribe((res:any)=>{
      console.log(res[0].data)
      this.recipes=res[0].data.filter(r=>r.category_id==this.id);
    })
  }
}
