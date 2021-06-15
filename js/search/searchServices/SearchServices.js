import SearchParams from "../SearchParams.js"
import { recipes } from "../../data/recipes.js"
import SearchResult from "../SearchResult.js"
import SearchServiceInput from "./SearchServicesInput.js"
import SearchServiceSecondary from "./SearchServicesSecondary.js"
// import SelectIngredients from "../../dom/selectTags/SelectIngredients.js"
// import SelectAppareils from "../../dom/selectTags/SelectAppareils.js"
// import SelectUstensiles from "../../dom/selectTags/SelectUstensiles.js"
import eventClickFilter from "../../listener/eventClick.js"
import DomRecipes from "../../dom/recipes/DomRecipes.js"
import DomFilters from "../../dom/selectTags/DomFilters.js"

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
                this.searchParams
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
        this.searchResult.recipes = this.searchResultFinal

        this.searchResultFinal.forEach(recipe => {

            // this.searchResult.recipes.push(recipe);

            recipe.ingredients.forEach(element => {
                this.searchResult.ingredients.add(element.ingredient);
            });

            this.searchResult.appareils.add(recipe.appliance);

            recipe.ustensils.forEach(element => {
                this.searchResult.ustensiles.add(element);
            });
        })

        DomFilters.clear('ingredientsListParent')
        DomFilters.clear('appareilsListParent')
        DomFilters.clear('ustensilesListParent')

        DomFilters.builtFilter(this.searchResult.ingredients,'ingredientsListParent','ingredient')
        DomFilters.builtFilter(this.searchResult.appareils,'appareilsListParent','appareil')
        DomFilters.builtFilter(this.searchResult.ustensiles,'ustensilesListParent','ustensile')

        eventClickFilter(document.querySelectorAll('#filtresContainer a'))

        console.log(this.searchResult)
        return this.searchResult;
    }
}