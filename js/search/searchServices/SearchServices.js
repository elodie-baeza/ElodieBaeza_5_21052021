import SearchParams from "../SearchParams.js"
import { recipes } from "../../data/recipes.js"
import SearchResult from "../SearchResult.js"
import SearchServiceInput from "./SearchServicesInput.js"
import SearchServiceSecondary from "./SearchServicesSecondary.js"

export default class SearchServices {
    constructor() {
        this.defaultRecipes = recipes;
    }
    
    launchSearch() {
        this.searchParams = new SearchParams();
        this.searchResult = new SearchResult();

        this.searchMainRecipiesResult = this.defaultRecipes; //100
        this.searchResultFinal = this.defaultRecipes; //100

        if (this.searchParams.isValidForPrimarySearch) {
            this.searchMainRecipiesResult = SearchServiceInput.research(
                this.searchParams,
                this.searchMainRecipiesResult,
            ); //30
            this.searchResultFinal = this.searchMainRecipiesResult; //30
        }

        if (this.searchParams.isValidForSecondarySearch()) {
            this.searchResultFinal = SearchServiceSecondary.research(this.searchMainRecipiesResult);//10
        }

        this.searchResult.recipes = this.searchResultFinal

        this.searchResultFinal.forEach(recipe => {
            this.searchResult.ingredients.push(recipe.ingredients);
            this.searchResult.appareils.push(recipe.appareils);
            this.searchResult.ustensiles.push(recipe.ustensiles);
        })
        console.log(this.searchResult)
        return this.searchResult;
    }
}