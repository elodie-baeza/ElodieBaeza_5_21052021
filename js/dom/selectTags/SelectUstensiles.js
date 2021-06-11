//affiche la liste des ustensiles dans le DOM
export default class SelectUstensiles {
    constructor(result) {
        this.result = result;
    }
    getResult() {
        return this.result;
    }
    //rempli la liste complète des ustensiles à partir des recettes du résultat de recherche
    builtFiltreUstensiles() {
        let html = '';
        this.result.forEach(element => {
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