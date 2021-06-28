import { formatString } from "../utils/formatString.js";
import { tableOfWords } from "../utils/tableOfWords.js";
import { recipes } from "./recipes.js";

export default class RecipesClean {
    static clean() {
        this.recipesClean = [];

        recipes.forEach((recipe, index) => {
            this.recipesClean.push({
                'id': recipe.id,
                'name': formatString(recipe.name),
                'ingredients': new Set(recipe.ingredients.map(item => formatString(item.ingredient))),
                'ingredientsString': '',
                'time': recipe.time,
                'description': formatString(recipe.description),
                'appliance': new Set().add(formatString(recipe.appliance)),
                'ustensils': new Set(recipe.ustensils.map(item => formatString(item))),
            })
            recipe.ingredients.forEach(ingredient => {
                let table = tableOfWords(ingredient.ingredient)
                table.forEach(elt => {
                    this.recipesClean[index].ingredientsString += elt+' '
                });
            })
        })
        this.recipesClean.forEach(recipe => {
            recipe.allMaterial = new Set([...recipe.ingredients,...recipe.appliance,...recipe.ustensils]);
        });
        
        return this.recipesClean;
    }
}