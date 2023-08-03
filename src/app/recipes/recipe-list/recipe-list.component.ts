import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'Test', 'https://outdoors.com/wp-content/uploads/2018/10/Veg-recipes.jpg')
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
