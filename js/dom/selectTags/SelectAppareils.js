export default class SelectAppareils {
    constructor(result) {
        this.result = result;
    }
    getResult() {
        return this.result;
    }
    builtFiltreAppareils() {
        const list = new Set();
        this.result.searchResultRecipes.forEach(recipe => {
               list.add(recipe.appliance);
            });

        let html = '';
        list.forEach(element => {
            html += `<a class="col-4 appareil" href="#">${element}</a>`;
        });
        let listSelect = document.getElementById('appareilsListParent');
        listSelect.insertAdjacentHTML('beforeend',html);
    }
}