

var mainSearch = document.getElementById('mainSearch');

class SearchParams {
    constructor (mainSearch, ingredients, appareils, ustensiles) {
        this.mainSearch = mainSearch;
        this.ingredients = ingredients;
        this.appareils = appareils;
        this.ustensiles = ustensiles;
    }
}

//retourne un tableau des éléments selectionnés pour une catégorie
function selectedTags(categoryListParent, selectedItemsArray) {
    //transforme la NodeList en Array, des <a> contenant la classe 'selected' dans la <div> parent
    const array = Array.from(document.getElementById(categoryListParent).getElementsByClassName('selected'));
    //parcour le tableau précédent et pour chaque element, stocke le texte de la balise <a> dans un nouveau tableau
    array.forEach(item => {
        selectedItemsArray.add(item.innerHTML);
    });
    return selectedItemsArray;
}

export {SearchParams, selectedTags};