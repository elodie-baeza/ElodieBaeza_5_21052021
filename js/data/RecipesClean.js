import { normalize } from "../utils/normalize.js";
import { recipes } from "./recipes.js";

export default class RecipesClean {
    static clean() {
        this.recipesClean = [];

        recipes.forEach(recipe => {
            this.recipesClean.push({
                'id': recipe.id,
                'name': normalize(recipe.name),
                'ingredients': new Set(recipe.ingredients.map(item => normalize(item.ingredient))),
                'time': recipe.time,
                'description': normalize(recipe.description),
                'appliance': new Set().add(normalize(recipe.appliance)),
                'ustensils': new Set(recipe.ustensils.map(item => normalize(item))),
            })
        })
        this.recipesClean.forEach(recipe => {
            recipe.allMaterial = new Set([...recipe.ingredients,...recipe.appliance,...recipe.ustensils]);
        });
        
        return this.recipesClean;
    }
}