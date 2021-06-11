//affiche la liste des appareils dans le DOM
export default class SelectAppareils {
    constructor(result) {
        this.result = result;
    }
    getResult() {
        return this.result;
    }
    //rempli la liste complète des appareils à partir des recettes du résultat de recherche
    builtFiltreAppareils() {
        let html = '';
        this.result.forEach(element => {
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