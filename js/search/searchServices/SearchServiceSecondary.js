import { recipesClean } from "../../app.js";
import { formatString } from "../../utils/formatString.js";

export default class SearchServiceSecondary {
    static research(searchResult, searchParams) {
        this.secondarySearchResult = new Set();

        // console.log(searchResult)
        searchResult.forEach(recipe => {
            let indexOfRecipe = recipe.id - 1;
            if (Array.from(searchParams.allSelected).every(x => Array.from(recipesClean[indexOfRecipe].allMaterial).includes(formatString(x)))) {
                this.secondarySearchResult.add(recipe);
            }
        });

        // console.log(this.secondarySearchResult)
        return this.secondarySearchResult;
    }
}