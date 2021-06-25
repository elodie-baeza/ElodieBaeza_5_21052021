import SearchParams from "../SearchParams.js"
import { recipes } from "../../data/recipes.js"
import SearchResult from "../SearchResult.js"
import SearchByMainInput from "./SearchByMainInput.js"
import SearchByTags from "./SearchByTags.js"
import eventClickFilter from "../../listener/eventClick.js"
import DomRecipes from "../../dom/recipes/DomRecipes.js"
import DomFilters from "../../dom/selectTags/DomFilters.js"

export default class SearchServices {
    constructor() {
        this.defaultRecipes = recipes;
        this.listOfRecipesFound = this.defaultRecipes;
    }

    launchSearch() {
        this.searchParams = new SearchParams();
        this.searchResult = new SearchResult();

        console.log(this.searchParams)
        console.log(this.listOfRecipesFound)
    
        // si texte présent dans champ principal
        if (this.searchParams.isEmpty() || this.searchParams.asMainInput() || this.searchParams.asMainInputAndTags()) {
            // lance une recherche principale
            this.listOfRecipesFound = SearchByMainInput.research(this.searchParams.mainInput, this.listOfRecipesFound); //30
            this.searchResult.build(this.listOfRecipesFound);
            this.buildDom(this.searchResult);
            // si recettes trouvées
            if (this.listOfRecipesFound.size !== 0) {
                // si tag selectionné
                if (this.searchParams.asMainInputAndTags()) {
                    // lance une recherche secondaire dans le résultat de la recherche principale
                    this.listOfRecipesFound = SearchByTags.research(this.listOfRecipesFound, this.searchParams);
                    this.searchResult.build(this.listOfRecipesFound);
                    this.buildDom(this.searchResult);
                }
            } //si aucun résultat affiche message
            if (this.listOfRecipesFound.size === 0) {
                document.getElementById('recipesContainer').textContent = '';
                let html = '';
                html += 
                `<p class="noResult">Aucune recette ne correspond à votre critère "${this.searchParams.mainInput}" vous pouvez chercher « tarte aux pommes », « poisson », etc.</p>`
                document.getElementById('recipesContainer').insertAdjacentHTML('beforeend',html);
            }
        }

        // si uniquement tag selectionné
        else if (this.searchParams.asOnlyTags()) {            
            this.listOfRecipesFound = SearchByTags.research(this.listOfRecipesFound,this.searchParams);
            this.searchResult.build(this.listOfRecipesFound);
            this.buildDom(this.searchResult); 
        }
    
        eventClickFilter(document.querySelectorAll('#filtresContainer a'));

        console.log(this.listOfRecipesFound);
        return this.listOfRecipesFound;
    }
    
    buildDom(result) {
        DomRecipes.buildRecipes(result.recipes);
        DomFilters.buildFilter(this.searchParams.ingredientsSelected, result.ingredients,'ingredientsListParent','ingredient');
        DomFilters.buildFilter(this.searchParams.appareilsSelected, result.appareils,'appareilsListParent','appareil');
        DomFilters.buildFilter(this.searchParams.ustensilesSelected, result.ustensiles,'ustensilesListParent','ustensile');
    }
}