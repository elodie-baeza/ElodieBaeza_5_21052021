import { eventClickTags, eventClickFilter, eventClickSearchBtn } from './listener/eventClick.js';
import eventKeyupInput from './listener/eventKeyupInput.js';
import { searchResult1 } from './fixtures/searchResult1.js';
import { searchResult2 } from './fixtures/searchResult2.js';
import SelectIngredients from './dom/selectTags/SelectIngredients.js';
import SelectAppareils from './dom/selectTags/SelectAppareils.js';
import SelectUstensiles from './dom/selectTags/SelectUstensiles.js';
import DomRecipes from './dom/recipes/DomRecipes.js';

// const DomServiceRecipes = new DomRecipes(searchResult1.recipes);
// DomServiceRecipes.builtRecipes();

// const DomServiceIngredients = new SelectIngredients(searchResult1.ingredients);
// DomServiceIngredients.builtFiltreIngredients();

// const DomServiceAppareils = new SelectAppareils(searchResult1.appareils);
// DomServiceAppareils.builtFiltreAppareils();

// const DomServiceUstensiles = new SelectUstensiles(searchResult1.ustensiles);
// DomServiceUstensiles.builtFiltreUstensiles();

eventClickTags();
eventClickFilter();
eventClickSearchBtn();
eventKeyupInput();