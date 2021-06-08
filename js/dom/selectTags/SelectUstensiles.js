import { recipes } from "../../data/recipes.js";

//affiche la liste des ustensiles dans le DOM
export default class SelectUstensiles {
    constructor(result) {
        this.result = result;
    }
    getResult() {
        return this.result;
    }
    //rempli la liste complète des ustensiles à partir de toutes les recettes au chargement de la page
    init() {
        this.builtFiltreUstensiles(recipes)
    }
    //rempli la liste complète des ustensiles à partir des recettes du résultat de recherche
    builtFiltreUstensiles(searchResult) {
        const list = new Set();
        searchResult.forEach(recipe => {
            recipe.ustensils.forEach(element => {
               list.add(element);
            });
        })

        let html = '';
        list.forEach(element => {
            html += `<a class="col-4 ustensile" href="#">${element}</a>`;
        });
        let listSelect = document.getElementById('ustensilesListParent');
        listSelect.insertAdjacentHTML('beforeend',html);
    }
    //vide la liste
    clear() {
        const aHtmlList = document.querySelectorAll('#ustensilesListParent a')
        aHtmlList.forEach(element => {
            element.remove()
        });
    }
}