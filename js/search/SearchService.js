// ********* FLORENT ****************
// Class SearchService()
// {
//     searchWithoutParams()
//     {
//         if (empty(SearchParams.main) && empty(SearchParams.ingredients) && empty(SearchParams.appareil)  && empty(SearchParams.ustensile) {
//             searchResult = {
//                 'recipies' = RECIPIES_BDD,
//                 'tagUstensiles' = [];
//                 'tagIngredients' = [];
//                 'tagAppareils' = [];
//             }
//             foreach (RECIPES_BDD as recipe) {
//                 searchResult.ingredient[] = recipie.ingredients;
//                 searchResult.appareils[] = recipie.appareils;
//                 searchResult.ustensils[] = recipie.ustensils;
//             }

//             return searchResult;
//         }
//     }
// }
// ***************************************
import SearchParams from "./SearchParams.js"
import RecipesClean from "../data/RecipesClean.js"
import { recipes } from "../data/recipes.js"

let recipesClean = new RecipesClean().clean()

export default class SearchService {
    constructor() {
    }
    
    static mainInputSearch() {
        console.log(recipesClean)

        const searchResult = new Set()

        let mainInput = new SearchParams().mainInput;
        console.log(mainInput)

        const table = []

        for (let i=0 ; i<recipesClean.length ; i++) {
            table[i] = 0
        }

        mainInput.forEach(word => {
            for (let i=0 ; i<recipesClean.length ; i++) {
                if (recipesClean[i].name.includes(word) || recipesClean[i].ingredients.has(word) || recipesClean[i].description.includes(word)) {
                    table[i] += 1
                }
            }
        });

        console.log(table)

        for (let i=0 ; i<table.length ; i++) {
            if (table[i] == mainInput.length) {
                searchResult.add(recipes[i])
            }
        }
        console.log(searchResult)
        return searchResult
    }
}