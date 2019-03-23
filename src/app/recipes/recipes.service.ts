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
			title: 'Spaghetti',
			imageUrl: 'https://photos.bigoven.com/recipe/hero/vampire-spagetti.jpg',
			ingredients: ['Spaghetti', 'Meat', 'Tomato']
		},
		{
			id: 'r3',
			title: 'Toffee Apples',
			imageUrl: 'http://www.fnstatic.co.uk/images/content/recipe/lyle-s-span-class-trademark-reg-span-toffee-apples.jpg',
			ingredients: ['Apples', 'Toffee', 'Sticks']
		},
		{
			id: 'r4',
			title: 'Salmon Bake',
			imageUrl: 'http://www.fnstatic.co.uk/images/content/recipe/madidi-s-salmon.jpg',
			ingredients: ['Salmon', 'Herbs', 'Greens']
		}
	];

	constructor() { }

	getAllRecipes() {
		return [...this.recipes];
	}
	// return a single recipe for an id
	getRecipe(recipeId: string) {
		return {
			...this.recipes.find(recipe => {
				return recipe.id === recipeId;
			})
		};
	}

	deleteRecipe(recipeId: string) {
		this.recipes = this.recipes.filter(recipe => {
			return recipe.id !== recipeId;
		});
	}
}
