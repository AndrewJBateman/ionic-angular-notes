import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable({
	providedIn: 'root'
})
export class RecipesService {
	private recipes: Recipe[] = [
		{
			id: 'r1',
			title: 'Schnitzel',
			imageUrl: 'https://www.mastercook.com/app/Image/17094147/5380324.jpg',
			ingredients: ['French fries', 'Pork Meat', 'Salad']
		},
		{
			id: 'r2',
			title: 'Spagetti',
			imageUrl: 'https://photos.bigoven.com/recipe/hero/vampire-spagetti.jpg',
			ingredients: ['Spaghetti', 'Meat', 'Tomato']
		}
	];

	constructor() { }

	getAllRecipes() {
		return [...this.recipes];
	}

	getRecipe(recipeId: string) {
		return {
			...this.recipes.find(recipe => {
				return recipe.id === recipeId;
			})
		};
	}
}
