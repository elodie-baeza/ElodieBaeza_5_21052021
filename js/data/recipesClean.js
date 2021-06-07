import { transformSentence } from '../utils/transformSentence.js';

//reconstruire un tableau recipesSimplified: (map)
    //sans accent
    //sans mot inférieurs à 3 lettres
    //séparer les suites de mots (ex: jus de citron --> ['jus', 'citron']) 

export default class RecipesClean {
    constructor (recipesClean) {
        this.recipesClean = recipesClean;
    }

    clean(recipes) {
        this.recipesClean = new Array()
        
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

        this.recipesClean.forEach(recipe => {
            recipe.ingredients = []
            recipe.appliance = []
            recipe.ustensils = []
        })

        for (let i=0 ; i<recipes.length ; i++) {
            this.recipesClean[i].name = transformSentence(recipes[i].name);
            
            for (let j=0 ; j<recipes[i].ingredients.length ; j++) {
                transformSentence(recipes[i].ingredients[j].ingredient).forEach(word => {
                    this.recipesClean[i].ingredients.push(word);
                })
            }

            this.recipesClean[i].description = transformSentence(recipes[i].description);

            transformSentence(recipes[i].appliance).forEach(word => {
                this.recipesClean[i].appliance.push(word);
            })

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