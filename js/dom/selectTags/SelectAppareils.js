import { recipes } from "../../data/recipes.js";

//affiche la liste des appareils dans le DOM
export default class SelectAppareils {
    constructor(result) {
        this.result = result;
    }
    getResult() {
        return this.result;
    }
    //rempli la liste complète des appareils à partir de toutes les recettes au chargement de la page
    init() {
        this.builtFiltreAppareils(recipes)
    }
    //rempli la liste complète des appareils à partir des recettes du résultat de recherche
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
    //vide la liste
    clear() {
        const aHtmlList = document.querySelectorAll('#appareilsListParent a')
        aHtmlList.forEach(element => {
            element.remove()
        });
    }
}