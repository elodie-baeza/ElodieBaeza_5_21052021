// import { recipesClean } from './data/recipesClean.js';
import eventClickTags from './listener/eventClickTags.js';
import eventKeyupInput from './listener/eventKeyupInput.js';
import { searchResult1 } from './fixture/searchResult1.js';
import { searchResult2 } from './fixture/searchResult2.js';
import SelectIngredients from './dom/selectTags/SelectIngredients.js';
import SelectAppareils from './dom/selectTags/SelectAppareils.js';
import SelectUstensiles from './dom/selectTags/SelectUstensiles.js';
import { recipes } from './data/recipes.js';
import DomRecipes from './dom/recipes/domRecipes.js';
import RecipesClean from './data/RecipesClean.js';


const domRecipes = new DomRecipes(searchResult2)
domRecipes.init()
// domRecipes.builtRecipes(searchResult2.searchResultRecipes)

const DomServiceIngredients = new SelectIngredients(searchResult2);
DomServiceIngredients.init();

const DomServiceAppareils = new SelectAppareils(searchResult2);
DomServiceAppareils.init();

const DomServiceUstensiles = new SelectUstensiles(searchResult2);
DomServiceUstensiles.init();

eventClickTags();
eventKeyupInput();

const recipesClean = new RecipesClean()
recipesClean.clean(recipes)
console.log(recipesClean)