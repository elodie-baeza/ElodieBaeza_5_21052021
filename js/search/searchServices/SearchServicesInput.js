import { recipes } from "../../data/recipes.js";

export default class SearchServiceInput {
    constructor() {
        
    }
    static research(searchParams) {
        console.log(searchParams)
        this.recipesResultList = new Set();
        this.recipes = recipes;

        this.recipes.forEach(recipe => {
            const tmpIngrList = new Set();
            recipe.ingredients.forEach (ingredient => {
                tmpIngrList.add(ingredient.ingredient)
            })
            
            const tmpUstList = new Set();
            recipe.ingredients.forEach (ingredient => {
                tmpUstList.add(ingredient.ingredient)
            })

            if (
                recipe.name.includes(searchParams.mainInput) ||
                recipe.description.includes(searchParams.mainInput)
                ) {
                this.recipesResultList.add(recipe)
            }
            recipe.ingredients.forEach(element => {
                if (element.ingredient.includes(searchParams.mainInput)){
                    this.recipesResultList.add(recipe)
                }
            })
        });

        // array.forEach(recipe => {
        //     switch (recipe) {
        //         case value:
                    
        //             break;
            
        //         default:
        //             break;
        //     }
        // });

        console.log(this.recipesResultList)
        return this.recipesResultList;
    }
}