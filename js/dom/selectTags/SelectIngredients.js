import { recipes } from "../../data/recipes.js";

export default class SelectIngredients {
    constructor(result) {
        this.result = result;
    }
    getResult() {
        return this.result;
    }
    init() {
        this.builtFiltreIngredients(recipes)
    }
    builtFiltreIngredients(searchResult) {
        const list = new Set();
        searchResult.forEach(recipe => {
            recipe.ingredients.forEach(element => {
               list.add(element.ingredient);
            });
        })

        let html = '';
        list.forEach(element => {
            html += `<a class="col-4 ingredient" href="#">${element}</a>`;
        });
        let listSelect = document.getElementById('ingredientsListParent');
        listSelect.insertAdjacentHTML('beforeend',html);
    }
    clear() {
        const aHtmlList = document.querySelectorAll('#ingredientsListParent a')
        aHtmlList.forEach(element => {
            element.remove()
        });
    }
}

