// import { recipesClean } from "../../app.js";
import { recipes } from "../../data/recipes.js";
import { formatString } from "../../utils/formatString.js";
import { tableOfWords } from "../../utils/tableOfWords.js";

export default class SearchByMainInput {
    static research(mainInput, resultList) {
        this.recipesResultList = new Set();
        // this.recipes = recipesClean;
        this.arrayMainInput = tableOfWords(mainInput);

            resultList.forEach(recipe => {
                if (this.arrayMainInput.every(x => formatString(recipe.name).includes(x))) {
                    this.recipesResultList.add(recipes[recipe.id-1]);
                }
                if (this.arrayMainInput.every(x => formatString(recipe.description).includes(x))) {
                    this.recipesResultList.add(recipes[recipe.id-1]);
                }

                recipe.ingredients.forEach(ingredient => {
                    if (this.arrayMainInput.every(x => formatString(ingredient.ingredient).includes(x))) {
                        this.recipesResultList.add(recipes[recipe.id-1]);
                    };
                });
            })

        return this.recipesResultList;
    }
}