import { recipesClean } from './data/recipesClean.js';
import eventClickTags from './listener/eventListener.js';
import { searchResult1 } from './fixture/searchResult1.js';
import SelectIngredients from './dom/selectTags/SelectIngredients.js';
import SelectAppareils from './dom/selectTags/SelectAppareils.js';
import SelectUstensiles from './dom/selectTags/SelectUstensiles.js';

eventClickTags();
console.log(recipesClean);

// const ingredientsListParent = document.getElementById('ingredientsListParent');
// const ingredientsListParent = document.getElementById('ingredientsListParent');
// const ingredientsListParent = document.getElementById('ingredientsListParent');

const DomServiceSearchResult1 = new SelectIngredients(searchResult1.searchResultIngredients);
console.log(DomServiceSearchResult1.builtFiltreIngredients());

const DomServiceSearchResult2 = new SelectAppareils(searchResult1.searchResultAppareils);
console.log(DomServiceSearchResult2.builtFiltreAppareils());

const DomServiceSearchResult3 = new SelectUstensiles(searchResult1.searchResultUstensiles);
console.log(DomServiceSearchResult3.builtFiltreUstensiles());