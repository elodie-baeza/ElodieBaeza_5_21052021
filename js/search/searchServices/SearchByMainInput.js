import { recipesClean } from "../../app.js";
import { tableOfWords } from "../../utils/tableOfWords.js";

export default class SearchByMainInput {
    static research(mainInput, resultList) {
        this.recipesResultList = new Set();
        // this.recipes = recipesClean;
        this.arrayMainInput = tableOfWords(mainInput);

        resultList.forEach(recipe => {
            if (this.arrayMainInput.every(x => recipe.name.includes(x) || recipe.description.includes(x))) {
                this.recipesResultList.add(recipesClean[recipe.id-1]);
            }

            recipe.ingredients.forEach(ingredient => {
                if (this.arrayMainInput.every(x => ingredient.includes(x))) {
                    this.recipesResultList.add(recipesClean[recipe.id-1]);
                };
            });
        })

        return this.recipesResultList;
    }
}