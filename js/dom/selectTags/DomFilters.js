//affiche la liste des ingredients dans le DOM
export default class DomFilters {
    //rempli la liste complète des ingredients à partir des recettes du résultat de recherche
    static builtFilter(searchResult, parentList, category) {
        let html = '';

        searchResult.forEach(elmt => {
            html += `<a class="col-4 ${category}" href="#">${elmt}</a>`;
        });

        let listSelect = document.getElementById(parentList);
        listSelect.insertAdjacentHTML('beforeend',html);
    }

    //vide la liste
    static clear(parentList) {
        document.getElementById(parentList).textContent = ''
    }
}