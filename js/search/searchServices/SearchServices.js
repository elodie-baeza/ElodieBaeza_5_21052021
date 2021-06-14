import SearchParams from "../SearchParams.js"
import { recipes } from "../../data/recipes.js"
import SearchResult from "../SearchResult.js"
import SearchServiceInput from "./SearchServicesInput.js"
import SearchServiceSecondary from "./SearchServicesSecondary.js"
import SelectIngredients from "../../dom/selectTags/SelectIngredients.js"
import SelectAppareils from "../../dom/selectTags/SelectAppareils.js"
import SelectUstensiles from "../../dom/selectTags/SelectUstensiles.js"
import { eventClickFilter } from "../../listener/eventClick.js"
import DomRecipes from "../../dom/recipes/DomRecipes.js"

export default class SearchServices {
    constructor() {
        // this.defaultRecipes = recipes;
    }
    
    static launchSearch() {
        this.defaultRecipes = recipes;
        this.searchParams = new SearchParams();
        this.searchResult = new SearchResult();

        this.searchMainRecipesResult = this.defaultRecipes; //100
        this.searchResultFinal = this.defaultRecipes; //100

        console.log(this.searchParams)

        if (this.searchParams.isValidForPrimarySearch()) {
            //trouve les recettes avec le texte de la recherche principale
            this.searchMainRecipesResult = SearchServiceInput.research(
                this.searchParams.getMainInput()
                // this.searchMainRecipesResult
            ); //30
            this.searchResultFinal = this.searchMainRecipesResult; //30
        }

        // if (this.searchParams.isValidForSecondarySearch()) {
        //     this.searchResultFinal = SearchServiceSecondary.research(this.searchMainRecipesResult);//10
        // }
        // console.log(this.searchResultFinal)
        // this.searchResult.recipes = this.searchResultFinal
        // console.log(this.searchResult)

        this.searchResultFinal.forEach(recipe => {
            this.searchResult.recipes.push(recipe);
            recipe.ingredients.forEach(element => {
                this.searchResult.ingredients.add(element.ingredient);
            });
            this.searchResult.appareils.add(recipe.appliance);
            recipe.ustensils.forEach(element => {
                this.searchResult.ustensiles.add(element);
            });
        })

        SelectIngredients.clear()
        SelectIngredients.builtFiltre(this.searchResult.ingredients)

        SelectAppareils.clear()
        SelectAppareils.builtFiltre(this.searchResult.appareils)

        SelectUstensiles.clear()
        SelectUstensiles.builtFiltre(this.searchResult.ustensiles)

        eventClickFilter(document.querySelectorAll('.filtresContainer a'))

        console.log(this.searchResult)
        return this.searchResult;
    }
}