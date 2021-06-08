import { recipes } from "../../data/recipes.js";
import { searchResult2 } from "../../fixture/searchResult2.js";

export default class SelectAppareils {
    constructor(result) {
        this.result = result;
    }
    getResult() {
        return this.result;
    }
    init() {
        this.builtFiltreAppareils(recipes)
    }
    builtFiltreAppareils(searchResult) {
        const list = new Set();
        searchResult.forEach(recipe => {
            list.add(recipe.appliance);
        });

        let html = '';
        list.forEach(element => {
            html += `<a class="col-4 appareil" href="#">${element}</a>`;
        });
        let listSelect = document.getElementById('appareilsListParent');
        listSelect.insertAdjacentHTML('beforeend',html);
    }
    clear() {
        const aHtmlList = document.querySelectorAll('#appareilsListParent a')
        aHtmlList.forEach(element => {
            element.remove()
        });
    }
}