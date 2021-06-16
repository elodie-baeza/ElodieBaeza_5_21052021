import eventKeyupSearchFilter from './listener/eventKeyupSearchFilter.js';
import { recipes } from './data/recipes.js';
import eventKeyupMainSearch from './listener/eventKeyupMainSearch.js';
import RecipesClean2 from './data/RecipesClean2.js';
import SearchServices from './search/searchServices/SearchServices.js';

RecipesClean2.clean()
console.log(RecipesClean2.recipesClean)

export const searchServices = new SearchServices
searchServices.launchSearch()

eventKeyupSearchFilter();
eventKeyupMainSearch();

console.log(recipes)