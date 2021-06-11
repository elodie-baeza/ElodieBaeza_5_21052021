//affiche la liste des ingredients dans le DOM
export default class SelectIngredients {
    constructor(result) {
        this.result = result;
    }
    getResult() {
        return this.result;
    }
    //rempli la liste complète des ingredients à partir des recettes du résultat de recherche
    builtFiltreIngredients() {
        let html = '';
        this.result.forEach(element => {
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

