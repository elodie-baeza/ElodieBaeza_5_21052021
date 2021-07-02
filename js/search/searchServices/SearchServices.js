import SearchParams from "../SearchParams.js"
import SearchResult from "../SearchResult.js"
import SearchByMainInput from "./SearchByMainInput.js"
import SearchByTags from "./SearchByTags.js"
import eventClickFilter from "../../listener/eventClick.js"
import DomRecipes from "../../dom/recipes/DomRecipes.js"
import DomFilters from "../../dom/selectTags/DomFilters.js"
import { allIdList } from "../../app.js"

export default class SearchServices {
    constructor() {
        this.listOfRecipesFound = allIdList;
    }

    launchSearch() {
        this.searchParams = new SearchParams();
        this.searchResult = new SearchResult();

        // console.log(this.searchResult)
        // console.log(this.searchParams)
    
        //si champ principal vide et aucun tag
        if (this.searchParams.isEmpty()) {
            // lance une recherche principale
            this.searchResult.build(allIdList);
            this.buildDom(this.searchResult);
        }
        // si texte présent dans champ principal
        else {
            // lance une recherche principale
            this.listOfRecipesFound = SearchByMainInput.research(this.searchParams.mainInput, allIdList); //30
            this.listOfRecipesFound = SearchByTags.research(this.listOfRecipesFound, this.searchParams);
            this.searchResult.build(this.listOfRecipesFound);
            if (this.listOfRecipesFound.length !== 0) {
                this.buildDom(this.searchResult);
            }
            else if (this.listOfRecipesFound.length === 0) {
                document.getElementById('recipesContainer').textContent = '';
                let html = '';
                html += 
                `<p class="noResult">Aucune recette ne correspond à votre critère "${this.searchParams.mainInput}" vous pouvez chercher « tarte aux pommes », « poisson », etc.</p>`
                document.getElementById('recipesContainer').insertAdjacentHTML('beforeend',html);
            }
        }
        
        this.previousParams = new SearchParams()

        eventClickFilter(document.querySelectorAll('#filtresContainer a'));
        // console.log(this.listOfRecipesFound)
        return this.listOfRecipesFound;
    }
    
    buildDom(result) {
        DomRecipes.buildRecipes(result.recipes);
        DomFilters.buildFilter(this.searchParams.ingredientsSelected, result.ingredients,'ingredientsListParent','ingredient');
        DomFilters.buildFilter(this.searchParams.appareilsSelected, result.appareils,'appareilsListParent','appareil');
        DomFilters.buildFilter(this.searchParams.ustensilesSelected, result.ustensiles,'ustensilesListParent','ustensile');
    }
}