import eventKeyupSearchFilter from './listener/eventKeyupSearchFilter.js';
import { searchResult1 } from './fixtures/searchResult1.js';
import { searchResult2 } from './fixtures/searchResult2.js';
import DomRecipes from './dom/recipes/DomRecipes.js';
import RecipesClean from './data/RecipesClean.js';
import { recipes } from './data/recipes.js';
import SearchServices from './search/searchServices/SearchServices.js';
import eventKeyupMainSearch from './listener/eventKeyupMainSearch.js';

DomRecipes.builtRecipes(SearchServices.launchSearch().recipes) 

eventKeyupSearchFilter();
eventKeyupMainSearch();

console.log(recipes)

const recipesClean = new RecipesClean().clean()
console.log(recipesClean)