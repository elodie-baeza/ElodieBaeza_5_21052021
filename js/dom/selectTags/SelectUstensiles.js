//affiche la liste des ustensiles dans le DOM
export default class SelectUstensiles {
    constructor() {
        // this.result = result;
    }
    // getResult() {
    //     return this.result;
    // }
    //rempli la liste complète des ustensiles à partir des recettes du résultat de recherche
    static builtFiltre(searchResultUst) {
        let html = '';
        
        searchResultUst.forEach(ust => {
            html += `<a class="col-4 ustensile" href="#">${ust}</a>`;
        });

        let listSelect = document.getElementById('ustensilesListParent');
        listSelect.insertAdjacentHTML('beforeend',html);
    }
    //vide la liste
    static clear() {
        const aHtmlList = document.querySelectorAll('#ustensilesListParent a')
        aHtmlList.forEach(element => {
            element.remove()
        });
    }
}