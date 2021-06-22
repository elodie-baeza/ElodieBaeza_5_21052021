import { formatString } from "../utils/formatString.js";
import { recipes } from "./recipes.js";

export default class RecipesClean {
    static clean() {
        this.recipesClean = [];

        recipes.forEach(recipe => {
            this.recipesClean.push({
                'id': recipe.id,
                'name': formatString(recipe.name),
                'ingredients': new Set(recipe.ingredients.map(item => formatString(item.ingredient))),
                'time': recipe.time,
                'description': formatString(recipe.description),
                'appliance': new Set().add(formatString(recipe.appliance)),
                'ustensils': new Set(recipe.ustensils.map(item => formatString(item))),
            })
        })
        this.recipesClean.forEach(recipe => {
            recipe.allMaterial = new Set([...recipe.ingredients,...recipe.appliance,...recipe.ustensils]);
        });
        
        return this.recipesClean;
    }
}