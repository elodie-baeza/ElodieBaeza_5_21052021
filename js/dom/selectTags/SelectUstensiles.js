export default class SelectUstensiles {
    constructor(result) {
        this.result = result;
    }
    getResult() {
        return this.result;
    }
    builtFiltreUstensiles() {
        const list = new Set();
        this.result.searchResultRecipes.forEach(recipe => {
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
}