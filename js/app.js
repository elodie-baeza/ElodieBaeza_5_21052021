import eventKeyupSearchFilter from './listener/eventKeyupSearchFilter.js';
import { recipes } from './data/recipes.js';
import eventKeyMainSearch from './listener/eventKeyMainSearch.js';
import RecipesClean from './data/RecipesClean.js';
import SearchServices from './search/searchServices/SearchServices.js';

console.log(recipes);

export const recipesClean = RecipesClean.clean();
console.log(recipesClean);
export const allIdList = RecipesClean.getAllId();

export const searchServices = new SearchServices();
searchServices.launchSearch();

eventKeyupSearchFilter();
eventKeyMainSearch();
