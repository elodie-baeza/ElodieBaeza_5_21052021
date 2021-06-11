import { transformSentence } from '../utils/transformSentence.js';
import { recipes } from './recipes.js';

export default class RecipesClean {
    constructor () {
        this.recipes = recipes
        this.recipesClean = new Array();
    }
    
    //reconstruire un tableau recipesSimplified: (map)
        //sans accent
        //sans mot inférieurs à 3 lettres
        //séparer les suites de mots (ex: jus de citron --> ['jus', 'citron']) 
    clean() {
        //nouvelle table des recettes
        // this.recipesClean = new Array()
        //reconstruit les propriétés du nouveau tableau à partir de recipes
        for (let i=0 ; i<this.recipes.length ; i++) {
            this.recipesClean.push({
                'id':this.recipes[i].id,
                'name':this.recipes[i].name,
                'ingredients':this.recipes[i].ingredients,
                'time':this.recipes[i].time,
                'description':this.recipes[i].description,
                'appliance':this.recipes[i].appliance,
                'ustensils':this.recipes[i].ustensils
            })
        }
        //vide les sous-tableaux ingredients / appareils / ustensiles
        this.recipesClean.forEach(recipe => {
            recipe.ingredients = new Set()
            recipe.appliance = new Set()
            recipe.ustensils = new Set()
        })
        //rempli les valeurs des propriétés dans chaque recette
        for (let i=0 ; i<recipes.length ; i++) {
            //transforme name en table de mots nettoyés
            this.recipesClean[i].name = transformSentence(this.recipes[i].name);

            //nettoye chaque ingrédient et met chaque mot dans ingredients[]
            for (let j=0 ; j<this.recipes[i].ingredients.length ; j++) {
                transformSentence(this.recipes[i].ingredients[j].ingredient).forEach(word => {
                    this.recipesClean[i].ingredients.add(word);
                })
            }
            //transforme description en table de mots nettoyés
            this.recipesClean[i].description = transformSentence(this.recipes[i].description);
            //transforme appliance en table de mots nettoyés
            transformSentence(this.recipes[i].appliance).forEach(word => {
                this.recipesClean[i].appliance.add(word);
            })
            //nettoye chaque ustensile et met chaque mot dans ustensils[]
            for (let j=0 ; j<this.recipes[i].ustensils.length ; j++) {
                transformSentence(this.recipes[i].ustensils[j]).forEach(word => {
                    this.recipesClean[i].ustensils.add(word);
                })
            }

        }
        return this.recipesClean
    }

    // allNameList() {
    //     const allNameList = new Set()
    //     this.recipesClean.forEach(recipe => {
    //         recipe.name.forEach(element => {
    //             allNameList.add(element);
    //         })
    //     })
    //     return allNameList
    // }

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