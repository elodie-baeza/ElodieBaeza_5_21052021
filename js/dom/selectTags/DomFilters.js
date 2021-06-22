//affiche la liste des ingredients dans le DOM
export default class DomFilters {
    //rempli la liste complète des ingredients à partir des recettes du résultat de recherche
    static buildFilter(searchParams, searchResult, parentList, category) {

        const filterList = [...document.getElementById(parentList).children]
        filterList.forEach(element => {
            if (element.classList.contains('selected') !== true) {
                element.remove()
            }    
        });


        let html = '';
        searchResult.forEach(elmt => {
            if (searchParams.has(elmt) == false) {
                html += `<a class="col-4 ${category}" href="#">${elmt}</a>`;
            }
        });

        let listSelect = document.getElementById(parentList);
        listSelect.insertAdjacentHTML('beforeend',html);
    }
}