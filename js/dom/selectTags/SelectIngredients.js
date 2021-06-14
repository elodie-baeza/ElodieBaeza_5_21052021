//affiche la liste des ingredients dans le DOM
export default class SelectIngredients {
    constructor() {
        // this.result = result;
    }
    // getResult() {
    //     return this.result;
    // }
    //rempli la liste complète des ingredients à partir des recettes du résultat de recherche
    static builtFiltre(searchResultIngr) {
        let html = '';

        searchResultIngr.forEach(ingr => {
            html += `<a class="col-4 ingredient" href="#">${ingr}</a>`;
        });

        let listSelect = document.getElementById('ingredientsListParent');
        listSelect.insertAdjacentHTML('beforeend',html);
    }

    //vide la liste
    static clear() {
        const aHtmlList = document.querySelectorAll('#ingredientsListParent a')
        aHtmlList.forEach(element => {
            element.remove()
        });
    }
}

