import {recipes} from './recipes.js';

const refactorRecipes = recipes;

console.table(refactorRecipes);

refactorRecipes.forEach(recipe => {
    recipe.id
});
