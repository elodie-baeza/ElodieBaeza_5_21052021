//affiche la liste des appareils dans le DOM
export default class SelectAppareils {
    constructor() {
        // this.result = result;
    }
    // getResult() {
    //     return this.result;
    // }
    //rempli la liste complète des appareils à partir des recettes du résultat de recherche
    static builtFiltre(searchResultApp) {
        let html = '';
        
        searchResultApp.forEach(app => {
            html += `<a class="col-4 appareil" href="#">${app}</a>`;
        });

        let listSelect = document.getElementById('appareilsListParent');
        listSelect.insertAdjacentHTML('beforeend',html);
    }
    //vide la liste
    static clear() {
        const aHtmlList = document.querySelectorAll('#appareilsListParent a')
        aHtmlList.forEach(element => {
            element.remove()
        });
    }
}