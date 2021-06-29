import { recipes } from "../data/recipes.js";

export default class SearchResult {
    constructor() {
        this.recipes = [];
        this.recipesId = []
        this.ingredients = new Set();
        this.appareils = new Set();
        this.ustensiles = new Set();
        this.allFilter = new Set();
    }

    build(resultCleanRecipes) {
        this.recipes = [];
        this.ingredients.clear();
        this.appareils.clear();
        this.ustensiles.clear();

        resultCleanRecipes.forEach(id => {
            recipes[id-1].ingredients.forEach(element => {
                this.ingredients.add(element.ingredient);
            });
            this.appareils.add(recipes[id-1].appliance);
            recipes[id-1].ustensils.forEach(element => {
                this.ustensiles.add(element);
            });
            this.recipes.push(recipes[id-1]);
        })

        this.allFilter = [...this.ingredients,...this.appareils,...this.ustensiles];
    }
}