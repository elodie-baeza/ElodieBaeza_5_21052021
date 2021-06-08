import { transformSentence } from '../utils/transformSentence.js';

export default class RecipesClean {
    constructor (recipesClean) {
        this.recipesClean = recipesClean;
    }
    
    //reconstruire un tableau recipesSimplified: (map)
        //sans accent
        //sans mot inférieurs à 3 lettres
        //séparer les suites de mots (ex: jus de citron --> ['jus', 'citron']) 
    clean(recipes) {
        //nouvelle table des recettes
        this.recipesClean = new Array()
        //reconstruit les propriétés du nouveau tableau à partir de recipes
        for (let i=0 ; i<recipes.length ; i++) {
            this.recipesClean.push({
                'id':recipes[i].id,
                'name':recipes[i].name,
                'ingredients':recipes[i].ingredients,
                'time':recipes[i].time,
                'description':recipes[i].description,
                'appliance':recipes[i].appliance,
                'ustensils':recipes[i].ustensils
            })
        }
        //vide les sous-tableaux ingredients / appareils / ustensiles
        this.recipesClean.forEach(recipe => {
            recipe.ingredients = []
            recipe.appliance = []
            recipe.ustensils = []
        })
        //rempli les valeurs des propriétés dans chaque recette
        for (let i=0 ; i<recipes.length ; i++) {
            //transforme name en table de mots nettoyés
            this.recipesClean[i].name = transformSentence(recipes[i].name);

            //nettoye chaque ingrédient et met chaque mot dans ingredients[]
            for (let j=0 ; j<recipes[i].ingredients.length ; j++) {
                transformSentence(recipes[i].ingredients[j].ingredient).forEach(word => {
                    this.recipesClean[i].ingredients.push(word);
                })
            }
            //transforme description en table de mots nettoyés
            this.recipesClean[i].description = transformSentence(recipes[i].description);
            //transforme appliance en table de mots nettoyés
            transformSentence(recipes[i].appliance).forEach(word => {
                this.recipesClean[i].appliance.push(word);
            })
            //nettoye chaque ustensile et met chaque mot dans ustensils[]
            for (let j=0 ; j<recipes[i].ustensils.length ; j++) {
                transformSentence(recipes[i].ustensils[j]).forEach(word => {
                    this.recipesClean[i].ustensils.push(word);
                })
            }

        }
    }

    // allIngredientsList() {
    //     const allIngredientsList = new Set()
    //     this.recipesClean.forEach(recipe => {
    //         recipe.ingredients.forEach(element => {
    //             allIngredientsList.add(element.ingredient);
    //         })
    //     })
    //     return allIngredientsList
    // }

    // allAppareilsList() {
    //     const allAppareilsList = new Set()
    //     this.recipesClean.forEach(element => {
    //         allAppareilsList.add(element.appliance);
    //     })
    //     return allAppareilsList
    // }

    // allUstensilesList() {
    //     const allUstensilesList = new Set()
    //     this.recipesClean.forEach(recipe => {
    //         recipe.ustensils.forEach(element => {
    //             allUstensilesList.add(element);
    //         })
    //     })
    //     return allUstensilesList
    // }
}
