import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  list_categories=[
    [1,"American","https://www.bbcgoodfoodme.com/assets/var/app/current/collections/337/original/texas-bbq-medley-.jpg"],
    [2,"Baking recipes","https://www.bbcgoodfoodme.com/assets/var/app/current/collections/573/original/matcha-mousse-cake.jpg"],
    [3,"Banana recipes","https://www.bbcgoodfoodme.com/assets/var/app/current/collections/404/original/banana-cake.png"],
    [4,"Biscuit","https://www.bbcgoodfoodme.com/assets/var/app/current/collections/575/original/alfajores-.jpg"],
    [5,"Brownie Recipes","https://www.bbcgoodfoodme.com/assets/var/app/current/collections/577/original/brownies.jpg"],
    [6,"Breakfast super-shake","https://www.bbcgoodfoodme.com/assets/var/app/current/collections/533/original/breakfast-super-shake.jpg"],
    [7,"Chocolate baking","https://www.bbcgoodfoodme.com/assets/var/app/current/collections/582/original/passion-fruit-cake.jpg"],
    [8,"Cooking for the kids","https://www.bbcgoodfoodme.com/assets/var/app/current/collections/293/original/Cooking_for_the_kids.png"],
    [9,"Eat healthier!","https://www.bbcgoodfoodme.com/assets/var/app/current/collections/95/original/Banana-Loaf_0032.png"],
    [10,"Fruity cake","https://www.bbcgoodfoodme.com/assets/var/app/current/collections/591/original/rosewater-raspberry-sponge-cake.jpg"]
  ];
  constructor() { }

  ngOnInit() {}

}
