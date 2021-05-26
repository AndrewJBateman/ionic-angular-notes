import { NgModule } from "@angular/core";

// PreloadAllModules provides a preloading strategy that preloads all modules as quickly as possible.
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{ path: "", redirectTo: "recipes", pathMatch: "full" },
	{
		path: "recipes",
		children: [
			{
				path: "",
				loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesPageModule),
			},
			{
				path: ":recipeId",
				loadChildren:
					() => import('./recipes/recipe-detail/recipe-detail.module').then(m => m.RecipeDetailPageModule),
			},
		],
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
