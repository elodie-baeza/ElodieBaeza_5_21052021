import { recipesClean } from "../../app.js";
import { recipes } from "../../data/recipes.js";
import { tableOfWords } from "../../utils/tableOfWords.js";

export default class SearchByMainInput {
    static research(mainInput) {
        this.recipesResultList = new Set();
        this.recipes = recipesClean;
        this.arrayMainInput = tableOfWords(mainInput);

            this.recipes.forEach((recipe, index) => {
                if (this.arrayMainInput.every(x => recipe.name.includes(x))) {
                    this.recipesResultList.add(recipes[index]);
                }
                if (this.arrayMainInput.every(x => recipe.description.includes(x))) {
                    this.recipesResultList.add(recipes[index]);
                }

                recipe.ingredients.forEach(ingredient => {
                    if (this.arrayMainInput.every(x => ingredient.includes(x))) {
                        this.recipesResultList.add(recipes[index]);
                    };
                });
            })

        return this.recipesResultList;
    }
}