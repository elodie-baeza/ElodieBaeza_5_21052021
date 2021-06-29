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

        console.log(this.searchResult)
        console.log(this.searchParams)
    
        //si champ principal vide et aucun tag
        if (this.searchParams.isEmpty()) {
            // lance une recherche principale
            this.searchResult.build(allIdList);
            this.buildDom(this.searchResult);
        }
        // si texte présent dans champ principal
        else if (this.searchParams.asMainInput() || this.searchParams.asMainInputAndTags()) {
            //si le champ precedent > champ actuel (user efface caractère) 
            //ou le nbre de tags precedent > nbre de tags actuel
            //alors cherche dans toutes les recettes
            if (this.previousParams.mainInput.length > this.searchParams.mainInput.length
                || this.previousParams.allSelected.size > this.searchParams.allSelected.size) {
                // lance une recherche principale
                this.listOfRecipesFound = SearchByMainInput.research(this.searchParams.mainInput, allIdList); //30
                this.searchResult.build(this.listOfRecipesFound);
                this.buildDom(this.searchResult);
            } else {
                // lance une recherche principale
                this.listOfRecipesFound = SearchByMainInput.research(this.searchParams.mainInput, this.listOfRecipesFound); //30
                this.searchResult.build(this.listOfRecipesFound);
                this.buildDom(this.searchResult);
                // si recettes trouvées
                if (this.listOfRecipesFound.length !== 0) {
                    // si tag selectionné
                    if (this.searchParams.asMainInputAndTags()) {
                        // lance une recherche secondaire dans le résultat de la recherche principale
                        this.listOfRecipesFound = SearchByTags.research(this.listOfRecipesFound, this.searchParams);
                        this.searchResult.build(this.listOfRecipesFound);
                        this.buildDom(this.searchResult);
                    }
                } //si aucun résultat affiche message
                if (this.listOfRecipesFound.length === 0) {
                    document.getElementById('recipesContainer').textContent = '';
                    let html = '';
                    html += 
                    `<p class="noResult">Aucune recette ne correspond à votre critère "${this.searchParams.mainInput}" vous pouvez chercher « tarte aux pommes », « poisson », etc.</p>`
                    document.getElementById('recipesContainer').insertAdjacentHTML('beforeend',html);
                }
            }
        }
        // si uniquement tag selectionné
        else if (this.searchParams.asOnlyTags()) {   
            this.listOfRecipesFound = SearchByTags.research(allIdList, this.searchParams);
            this.searchResult.build(this.listOfRecipesFound);
            this.buildDom(this.searchResult); 
        }
        
        this.previousParams = new SearchParams()

        eventClickFilter(document.querySelectorAll('#filtresContainer a'));

        return this.listOfRecipesFound;
    }
    
    buildDom(result) {
        DomRecipes.buildRecipes(result.recipes);
        DomFilters.buildFilter(this.searchParams.ingredientsSelected, result.ingredients,'ingredientsListParent','ingredient');
        DomFilters.buildFilter(this.searchParams.appareilsSelected, result.appareils,'appareilsListParent','appareil');
        DomFilters.buildFilter(this.searchParams.ustensilesSelected, result.ustensiles,'ustensilesListParent','ustensile');
    }
}