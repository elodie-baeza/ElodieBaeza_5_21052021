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
import { eventClickSearchBtn } from "../listener/eventClick.js"

export default class SearchService {

    constructor(searchParams) {
        this.searchParams = searchParams
        this.searchResult = []
    }
    searchWithoutparams() {
        console.log(this.searchParams)
    }
}