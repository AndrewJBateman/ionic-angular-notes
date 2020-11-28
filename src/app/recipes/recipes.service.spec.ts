import { TestBed } from "@angular/core/testing";

import { RecipesService } from "./recipes.service";

describe("RecipesService", () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it("should be created", () => {
		const service: RecipesService = TestBed.inject(RecipesService);
		expect(service).toBeTruthy();
	});
});
