// import { recipesClean } from './data/recipesClean.js';
import eventClickTags from './listener/eventListener.js';
import { searchResult1 } from './fixture/searchResult1.js';
import { searchResult2 } from './fixture/searchResult2.js';
import SelectIngredients from './dom/selectTags/SelectIngredients.js';
import SelectAppareils from './dom/selectTags/SelectAppareils.js';
import SelectUstensiles from './dom/selectTags/SelectUstensiles.js';
import { recipes } from './data/recipes.js';
import DomRecipes from './dom/recipes/domRecipes.js';
import RecipesClean from './data/RecipesClean.js';

eventClickTags();

const domRecipes = new DomRecipes(searchResult2)
domRecipes.builtRecipes()

const DomServiceSearchResult1 = new SelectIngredients(searchResult2);
console.log(DomServiceSearchResult1.builtFiltreIngredients());

const DomServiceSearchResult2 = new SelectAppareils(searchResult2);
console.log(DomServiceSearchResult2.builtFiltreAppareils());

const DomServiceSearchResult3 = new SelectUstensiles(searchResult2);
console.log(DomServiceSearchResult3.builtFiltreUstensiles());

const recipesClean = new RecipesClean()
recipesClean.clean(recipes)