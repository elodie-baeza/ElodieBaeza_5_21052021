import eventKeyupSearchFilter from './listener/eventKeyupSearchFilter.js';
// import { recipes } from './data/recipes.js';
import eventKeyMainSearch from './listener/eventKeyMainSearch.js';
import RecipesClean from './data/RecipesClean.js';
import SearchServices from './search/searchServices/SearchServices.js';

export const recipesClean = RecipesClean.clean();
// console.log(recipesClean);

export const searchServices = new SearchServices();
searchServices.launchSearch();

eventKeyupSearchFilter();
eventKeyMainSearch();
