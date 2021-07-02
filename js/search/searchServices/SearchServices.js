import SearchParams from "../SearchParams.js"
import SearchResult from "../SearchResult.js"
import SearchByMainInput from "./SearchByMainInput.js"
import SearchByTags from "./SearchByTags.js"
import eventClickFilter from "../../listener/eventClick.js"
import DomRecipes from "../../dom/recipes/DomRecipes.js"
import DomFilters from "../../dom/selectTags/DomFilters.js"
import { recipesClean } from "../../app.js"

export default class SearchServices {
    constructor() {
        this.listOfRecipesFound = recipesClean;
    }

    launchSearch() {
        this.searchParams = new SearchParams();
        this.searchResult = new SearchResult();

        // console.log(this.searchParams)
        // console.log(this.listOfRecipesFound)
    
        //si champ principal vide et aucun tag
        if (this.searchParams.isEmpty()) {
            // lance une recherche principale
            this.searchResult.build(recipesClean);
            this.buildDom(this.searchResult);
        }
        // si texte présent dans champ principal
        else if (this.searchParams.hasMainInput() || this.searchParams.hasMainInputAndTags()) {
            //si le champ precedent > champ actuel (user efface caractère) 
            //ou le nbre de tags precedent > nbre de tags actuel
            //alors cherche dans toutes les recettes
            if (this.previousParams.mainInput.length > this.searchParams.mainInput.length
                || this.previousParams.allSelected.size > this.searchParams.allSelected.size) {
                // lance une recherche principale
                this.listOfRecipesFound = SearchByMainInput.research(this.searchParams.mainInput, recipesClean);
                this.listOfRecipesFound = SearchByTags.research(this.listOfRecipesFound, this.searchParams);
                this.searchResult.build(this.listOfRecipesFound);
                this.buildDom(this.searchResult);
            } else {
                // lance une recherche principale
                this.listOfRecipesFound = SearchByMainInput.research(this.searchParams.mainInput, this.listOfRecipesFound);
                this.listOfRecipesFound = SearchByTags.research(this.listOfRecipesFound, this.searchParams);
                this.searchResult.build(this.listOfRecipesFound);
                this.buildDom(this.searchResult);
                // si recettes trouvées
                if (this.listOfRecipesFound.size !== 0) {
                    this.buildDom(this.searchResult);
                }
                } //si aucun résultat affiche message
                if (this.listOfRecipesFound.size === 0) {
                    this.buildDom(this.searchResult);
                    document.getElementById('recipesContainer').textContent = '';
                    let html = '';
                    html += 
                    `<p class="noResult">Aucune recette ne correspond à votre critère "${this.searchParams.mainInput}" vous pouvez chercher « tarte aux pommes », « poisson », etc.</p>`
                    document.getElementById('recipesContainer').insertAdjacentHTML('beforeend',html);
                }
        }
        // si uniquement tag selectionné
        else if (this.searchParams.hasOnlyTags()) {            
            this.listOfRecipesFound = SearchByTags.research(recipesClean,this.searchParams);
            this.searchResult.build(this.listOfRecipesFound);
            this.buildDom(this.searchResult); 
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