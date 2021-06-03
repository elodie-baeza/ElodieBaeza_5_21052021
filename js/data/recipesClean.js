import { recipes } from './recipes.js';
import { transformSentence } from '../utils/transformSentence.js';

// test:
// let toto = "(Limonadé, de dans l'coco à mémé)"
// console.log(toto)
// console.log(transformSentence(toto))

//reconstruire un tableau recipesSimplified: (map)
    //sans accent
    //sans mot inférieurs à 3 lettres
    //séparer les suites de mots (ex: jus de citron --> ['jus', 'citron']) 
recipes.forEach(recipe => {
    recipe.name = transformSentence(recipe.name);
    recipe.ingredients.forEach(ingredient => {
        ingredient.ingredient = transformSentence(ingredient.ingredient);
    });
    recipe.ustensils.forEach(ustensil => {
        recipe.ustensils.splice(recipe.ustensils.indexOf(ustensil), 1)
        transformSentence(ustensil).forEach(element => {
            recipe.ustensils.push(element)
        });
    });
    recipe.description = transformSentence(recipe.description);
});

//convertie le tableau de recette en objet Map
let newRecipesArray = Object.entries(recipes)
export const recipesClean = new Map(newRecipesArray)
// console.log(recipesIngredientMap)