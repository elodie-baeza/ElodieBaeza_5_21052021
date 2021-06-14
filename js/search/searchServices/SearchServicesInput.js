import { recipes } from "../../data/recipes.js";

export default class SearchServiceInput {
    constructor() {
        
    }
    static research(input) {
        console.log(input)
        this.recipesResultList = new Set();
        this.recipes = recipes;

        this.recipes.forEach(recipe => {
            if (recipe.name.includes(input) || recipe.description.includes(input)) {
                this.recipesResultList.add(recipe)
            }
            recipe.ingredients.forEach(element => {
                if (element.ingredient.includes(input)){
                    this.recipesResultList.add(recipe)
                }
            })
        });

        console.log(this.recipesResultList)
        return this.recipesResultList;
    }
}