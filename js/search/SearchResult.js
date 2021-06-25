export default class SearchResult {
    constructor() {
        this.recipes = [];
        this.ingredients = new Set();
        this.appareils = new Set();
        this.ustensiles = new Set();
        this.allFilter = new Set();
    }
    build(result) {
        this.recipes = result;
        this.ingredients.clear();
        this.appareils.clear();
        this.ustensiles.clear();

        this.recipes.forEach(recipe => {
            recipe.ingredients.forEach(element => {
                this.ingredients.add(element.ingredient);
            });
            this.appareils.add(recipe.appliance);
            recipe.ustensils.forEach(element => {
                this.ustensiles.add(element);
            });
        })
        this.allFilter = [...this.ingredients,...this.appareils,...this.ustensiles];
    }
}