import { recipesClean } from "../../app.js";
import { formatString } from "../../utils/formatString.js";

export default class SearchByTags {
    static research(searchResult, searchParams) {
        this.result = new Set();

        searchResult.forEach(recipe => {
            let indexOfRecipe = recipe.id - 1;
            if (Array.from(searchParams.allSelected).every(x => Array.from(recipesClean[indexOfRecipe].allMaterial).includes(formatString(x)))) {
                this.result.add(recipe);
            }
        });

        return this.result;
    }
}