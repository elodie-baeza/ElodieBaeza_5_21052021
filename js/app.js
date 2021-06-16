import eventKeyupSearchFilter from './listener/eventKeyupSearchFilter.js';
import DomRecipes from './dom/recipes/DomRecipes.js';
import { recipes } from './data/recipes.js';
import SearchServices from './search/searchServices/SearchServices.js';
import eventKeyupMainSearch from './listener/eventKeyupMainSearch.js';
import RecipesClean2 from './data/RecipesClean2.js';

RecipesClean2.clean()
console.log(RecipesClean2.recipesClean)

DomRecipes.builtRecipes(SearchServices.launchSearch().recipes) 

eventKeyupSearchFilter();
eventKeyupMainSearch();

console.log(recipes)

const recipesClean = new RecipesClean().clean()
console.log(recipesClean)