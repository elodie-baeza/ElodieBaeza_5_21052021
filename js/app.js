import { eventClickTags, eventClickSearchBtn } from './listener/eventClick.js';
import eventKeyupInput from './listener/eventKeyupInput.js';
import { searchResult1 } from './fixtures/searchResult1.js';
import { searchResult2 } from './fixtures/searchResult2.js';
import DomRecipes from './dom/recipes/DomRecipes.js';
import RecipesClean from './data/RecipesClean.js';
import { recipes } from './data/recipes.js';
import SearchServices from './search/searchServices/SearchServices.js';

DomRecipes.builtRecipes(SearchServices.launchSearch().recipes) 

eventClickTags();
eventClickSearchBtn();
eventKeyupInput();

console.log(recipes)

const recipesClean = new RecipesClean().clean()
console.log(recipesClean)