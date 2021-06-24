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
        this.searchMainRecipesResult = this.defaultRecipes;
        this.searchResultFinal = this.defaultRecipes;
    }

    launchSearch() {
        this.searchParams = new SearchParams();
        this.searchResult = new SearchResult();

        console.log(this.searchParams)
        console.log(this.searchResultFinal)

        // si aucun param, affiche toutes les recettes
        if (this.searchParams.isEmpty()){
            this.buildSearchresult(this.searchResultFinal);
            this.buildDom(this.searchResult);    
        }
    
        // si texte présent dans champ principal
        if (this.searchParams.asMainInput()) {
            // lance une recherche principale
            this.searchMainRecipesResult = SearchByMainInput.research(this.searchParams.mainInput); //30
            this.searchResultFinal = this.searchMainRecipesResult; //30
            this.buildSearchresult(this.searchResultFinal);
            this.buildDom(this.searchResult);
            // si recettes trouvées
            if (this.searchResultFinal.size !== 0) {
                // si tag selectionné
                if (this.searchParams.asMainInputAndTags()) {
                    // lance une recherche secondaire dans le résultat de la recherche principale
                    this.searchResultFinal = SearchByTags.research(this.searchMainRecipesResult, this.searchParams);
                    this.buildSearchresult(this.searchResultFinal);
                    this.buildDom(this.searchResult);
                }
            } else { //sinon affiche message
                document.getElementById('recipesContainer').textContent = '';
                let html = '';
                html += 
                `<p class="noResult">Aucune recette ne correspond à votre critère "${this.searchParams.mainInput}" vous pouvez chercher « tarte aux pommes », « poisson », etc.</p>`
                document.getElementById('recipesContainer').insertAdjacentHTML('beforeend',html);
            }
        }

        // si uniquement tag selectionné
        if (this.searchParams.asOnlyTags()) {            
            this.searchResultFinal = SearchByTags.research(this.searchResultFinal,this.searchParams);
            this.buildSearchresult(this.searchResultFinal);
            this.buildDom(this.searchResult); 
        }
        
        eventClickFilter(document.querySelectorAll('#filtresContainer a'));

        console.log(this.searchResultFinal);
        return this.searchResultFinal;
    }
    
    buildSearchresult(result) {
        this.searchResult.recipes = result;
        this.searchResult.ingredients.clear();
        this.searchResult.appareils.clear();
        this.searchResult.ustensiles.clear();

        this.searchResult.recipes.forEach(recipe => {
            recipe.ingredients.forEach(element => {
                this.searchResult.ingredients.add(element.ingredient);
            });
            this.searchResult.appareils.add(recipe.appliance);
            recipe.ustensils.forEach(element => {
                this.searchResult.ustensiles.add(element);
            });
        })
        this.searchResult.allFilter = [...this.searchResult.ingredients,...this.searchResult.appareils,...this.searchResult.ustensiles];
    }

    buildDom(result) {
        DomRecipes.buildRecipes(result.recipes);
        DomFilters.buildFilter(this.searchParams.ingredientsSelected, result.ingredients,'ingredientsListParent','ingredient');
        DomFilters.buildFilter(this.searchParams.appareilsSelected, result.appareils,'appareilsListParent','appareil');
        DomFilters.buildFilter(this.searchParams.ustensilesSelected, result.ustensiles,'ustensilesListParent','ustensile');
    }
}