import { normalize } from "../utils/normalize.js";
import { recipes } from "./recipes.js";

export default class RecipesClean2 {
    static clean() {
        this.recipesClean = new Array();

        recipes.forEach(recipe => {
            this.recipesClean.push({
                'id': recipe.id,
                'name': normalize(recipe.name),
                // 'ingredients':recipe.ingredients,
                'ingredients': new Set(recipe.ingredients.map(item => normalize(item.ingredient))),
                'time': recipe.time,
                'description': normalize(recipe.description),
                'appliance': new Set().add(normalize(recipe.appliance)),
                'ustensils': new Set(recipe.ustensils.map(item => normalize(item))),
            })
        })
        
        return this.recipesClean
    }
}