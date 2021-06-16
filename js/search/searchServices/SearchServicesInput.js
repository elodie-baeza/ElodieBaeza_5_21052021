import { recipes } from "../../data/recipes.js";
import RecipesClean2 from "../../data/RecipesClean2.js";
import { normalize } from "../../utils/normalize.js";

export default class SearchServiceInput {
    static research(searchParams) {
        this.recipesResultList = new Set();
        this.recipes = RecipesClean2.recipesClean;
        this.mainInput = normalize(searchParams.mainInput)

        this.recipes.forEach((recipe, index) => {
            recipe.ingredients.forEach(element => {
                if (element.includes(this.mainInput)) {
                    this.recipesResultList.add(recipes[index])
                }
            });

            if (
                recipe.name.includes(this.mainInput) ||
                recipe.description.includes(this.mainInput)
            ) {
                this.recipesResultList.add(recipes[index])
            }
        })

        console.log(this.recipesResultList)
        return this.recipesResultList;
    }
}