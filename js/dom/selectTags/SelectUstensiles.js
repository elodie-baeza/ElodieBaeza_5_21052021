import { recipes } from "../../data/recipes.js";
import { searchResult2 } from "../../fixture/searchResult2.js";

export default class SelectUstensiles {
    constructor(result) {
        this.result = result;
    }
    getResult() {
        return this.result;
    }
    init() {
        this.builtFiltreUstensiles(recipes)
    }
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
    clear() {
        const aHtmlList = document.querySelectorAll('#ustensilesListParent a')
        aHtmlList.forEach(element => {
            element.remove()
        });
    }
}