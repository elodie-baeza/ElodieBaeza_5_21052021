export default class SelectIngredients {
    constructor(result) {
        this.result = result;
    }
    getResult() {
        return this.result;
    }
    builtFiltreIngredients() {
        const list = new Set();
        this.result.searchResultRecipes.forEach(recipe => {
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
}

