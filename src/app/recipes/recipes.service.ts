import { Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";

@Injectable({
	providedIn: "root",
})
export class RecipesService {
	private recipes: Recipe[] = [
		{
			id: "r1",
			title: "Schnitzel",
			imageUrl: "https://www.mastercook.com/app/Image/17094147/5380324.jpg",
			ingredients: ["French fries", "Pork Meat", "Salad"],
		},
		{
			id: "r2",
			title: "Spaghetti",
			imageUrl: "https://photos.bigoven.com/recipe/hero/vampire-spagetti.jpg",
			ingredients: ["Spaghetti", "Meat", "Tomato"],
		},
		{
			id: "r3",
			title: "Toffee Apples",
			imageUrl:
				"https://image.shutterstock.com/image-photo/toffee-apple-450w-249373123.jpg",
			ingredients: ["Apples", "Toffee", "Sticks"],
		},
		{
			id: "r4",
			title: "Salmon Bake",
			imageUrl:
				"https://image.shutterstock.com/image-photo/salmon-roasted-oven-butter-parsley-450w-590193029.jpg",
			ingredients: ["Salmon", "Herbs", "Greens"],
		},
		{
			id: "r5",
			title: "Peppa Pig Pie",
			imageUrl: "https://img2.rtve.es/i/?w=250&crop=no&i=1426503029562.JPG",
			ingredients: ["Peppa", "Pig", "Pie"],
		},
	];

	constructor() {}

	getAllRecipes() {
		return [...this.recipes];
	}
	// return a single recipe for an id
	getRecipe(recipeId: string): Recipe {
		return {
			...this.recipes.find((recipe) => {
				return recipe.id === recipeId;
			}),
		};
	}

	// delete a recipe using the filter function and recipe id
	deleteRecipe(recipeId: string) {
		this.recipes = this.recipes.filter((recipe) => {
			return recipe.id !== recipeId;
		});
	}
}
