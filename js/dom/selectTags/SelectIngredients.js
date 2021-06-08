import { recipes } from "../../data/recipes.js";

//affiche la liste des ingredients dans le DOM
export default class SelectIngredients {
    constructor(result) {
        this.result = result;
    }
    getResult() {
        return this.result;
    }
    //rempli la liste complète des ingredients à partir de toutes les recettes au chargement de la page
    init() {
        this.builtFiltreIngredients(recipes)
    }
    //rempli la liste complète des ingredients à partir des recettes du résultat de recherche
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
    //vide la liste
    clear() {
        const aHtmlList = document.querySelectorAll('#ingredientsListParent a')
        aHtmlList.forEach(element => {
            element.remove()
        });
    }
}

