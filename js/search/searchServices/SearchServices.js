import SearchParams from "../SearchParams.js"
import { recipes } from "../../data/recipes.js"
import SearchResult from "../SearchResult.js"
import SearchServiceInput from "./SearchServiceInput.js"
import SearchServiceSecondary from "./SearchServiceSecondary.js"
import eventClickFilter from "../../listener/eventClick.js"
import DomRecipes from "../../dom/recipes/DomRecipes.js"
import DomFilters from "../../dom/selectTags/DomFilters.js"

export default class SearchServices {
    constructor() {
        this.defaultRecipes = recipes;
        this.searchParams = new SearchParams();
        this.searchResult = new SearchResult();

        this.searchMainRecipesResult = this.defaultRecipes; //100
        this.searchResultFinal = this.defaultRecipes; //100
    }
    // init() {
    //     this.searchParams.getParams()
    //     this.searchResult.init()
    //     //si aucun param, affiche toutes les recettes
    //     this.searchResultFinal = SearchServiceInput.research(this.searchParams); //30
    //     this.builtSearchresult(this.searchResultFinal)
    //     this.builtDom(this.searchResult)     
    // }

    launchSearch() {
        this.searchParams = new SearchParams();
        this.searchResult = new SearchResult();

        console.log(this.searchParams)
        console.log(this.searchResult)

        // this.searchParams.getParams()
        // this.searchResult.init()

        // si aucun param, affiche toutes les recettes
        this.searchResultFinal = SearchServiceInput.research(this.searchParams); //30
        this.builtSearchresult(this.searchResultFinal)
        this.builtDom(this.searchResult)    
        
        //si champ principal valide (au moins 3 caractères)
        if (this.searchParams.isValidForPrimarySearch() == true) {
            //cherche les recettes suivant la recherche principale
            this.searchMainRecipesResult = SearchServiceInput.research(this.searchParams); //30
            this.searchResultFinal = this.searchMainRecipesResult; //30
            
            //affiche message si aucun résultat
            if (this.searchResultFinal.size == 0) {
                document.getElementById('recipesContainer').textContent = ''
                let html = '';
                html += 
                `<p class="noResult">Aucune recette ne correspond à votre critère "${this.searchParams.mainInput}" vous pouvez chercher « tarte aux pommes », « poisson », etc.</p>`
                document.getElementById('recipesContainer').insertAdjacentHTML('beforeend',html);
            } else { //sinon affiche les recettes trouvées
                this.builtSearchresult(this.searchResultFinal)
                this.builtDom(this.searchResult)      
            }
        } else { //sinon affiche toutes les recettes
            this.builtSearchresult(this.searchResultFinal)
            this.builtDom(this.searchResult)    
        }

        //si recherche principale + filtre selectionné, recherche parmis les recettes du 1er résultat de la recherche principale
        if (this.searchParams.isValidForSecondarySearch()) {
            this.searchResultFinal = SearchServiceSecondary.research(this.searchMainRecipesResult, this.searchParams);//10
            this.builtSearchresult(this.searchResultFinal)
            // console.log(this.searchParams)
            this.builtDom(this.searchResult)    
        }

        //si uniquement filtre selectionné, recherche dans toutes les recettes
        if (this.searchParams.isValidForTertiarySearch()) {
            console.log(this.searchResult, this.searchParams)
            this.searchResultFinal = SearchServiceSecondary.research(this.searchResult.recipes, this.searchParams);
            console.log(this.searchResultFinal)
            this.builtSearchresult(this.searchResultFinal)
            this.builtDom(this.searchResult)    
        }

        eventClickFilter(document.querySelectorAll('#filtresContainer a'))

        console.log(this.searchResult)
        return this.searchResult;
    }

    builtSearchresult(result) {
        // console.log(result)
        this.searchResult.recipes = result
        this.searchResult.ingredients.clear()
        this.searchResult.appareils.clear()
        this.searchResult.ustensiles.clear()

        this.searchResult.recipes.forEach(recipe => {
            recipe.ingredients.forEach(element => {
                this.searchResult.ingredients.add(element.ingredient);
            });
            this.searchResult.appareils.add(recipe.appliance);
            recipe.ustensils.forEach(element => {
                this.searchResult.ustensiles.add(element);
            });
        })
        this.searchResult.allFilter = [...this.searchResult.ingredients,...this.searchResult.appareils,...this.searchResult.ustensiles]
        // console.log(this.searchResult)
    }

    builtDom(result) {
        // console.log(result)
        DomRecipes.builtRecipes(result.recipes)
        DomFilters.builtFilter(this.searchParams.ingredientsSelected, result.ingredients,'ingredientsListParent','ingredient')
        DomFilters.builtFilter(this.searchParams.appareilsSelected, result.appareils,'appareilsListParent','appareil')
        DomFilters.builtFilter(this.searchParams.ustensilesSelected, result.ustensiles,'ustensilesListParent','ustensile')
    }
}