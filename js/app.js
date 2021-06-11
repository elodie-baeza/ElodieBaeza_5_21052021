import { eventClickTags, eventClickFilter, eventClickSearchBtn } from './listener/eventClick.js';
import eventKeyupInput from './listener/eventKeyupInput.js';
import { searchResult1 } from './fixture/searchResult1.js';
import { searchResult2 } from './fixture/searchResult2.js';
import SelectIngredients from './dom/selectTags/SelectIngredients.js';
import SelectAppareils from './dom/selectTags/SelectAppareils.js';
import SelectUstensiles from './dom/selectTags/SelectUstensiles.js';
import { recipes } from './data/recipes.js';
import DomRecipes from './dom/recipes/DomRecipes.js';
import RecipesClean from './data/RecipesClean.js';
import SearchService from './search/SearchService.js';

// const toto = new SearchService
export function titi() {
// console.log(SearchService.mainInputSearch())
// const domRecipes = new DomRecipes()
DomRecipes.builtRecipes(SearchService.mainInputSearch())
}
// domRecipes.builtRecipes(searchResult2.searchResultRecipes)

const DomServiceIngredients = new SelectIngredients(searchResult2);
DomServiceIngredients.init();

const DomServiceAppareils = new SelectAppareils(searchResult2);
DomServiceAppareils.init();

const DomServiceUstensiles = new SelectUstensiles(searchResult2);
DomServiceUstensiles.init();

eventClickTags();
eventClickFilter();
eventClickSearchBtn();
eventKeyupInput();

// const recipesClean = RecipesClean.clean(recipes)
// console.log(recipesClean)

