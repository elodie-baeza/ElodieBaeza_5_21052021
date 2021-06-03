export default class SelectIngredients {
    constructor(result) {
        this.result = result;
    }
    getResult() {
        return this.result;
    }
    builtFiltreIngredients() {
        let html = '';
        console.log(this.result);
        this.result.forEach(ingredient => {
            html += `<a class="col-4 ingredient" href="#">${ingredient}</a>`;
        });
        let listSelect = document.getElementById('ingredientsListParent');
        listSelect.insertAdjacentHTML('beforeend',html);
    }
}