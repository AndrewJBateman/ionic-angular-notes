import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{	path: '',	redirectTo: 'recipes', pathMatch: 'full' },
	{
		path: 'recipes',
		children: [
			{
				path: '',
				loadChildren: './recipes/recipes.module#RecipesPageModule'
			},
			{
				path: ':recipeId',
				loadChildren: './recipes/recipe-detail/recipe-detail.module#RecipeDetailPageModule'
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
