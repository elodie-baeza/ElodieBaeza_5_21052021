var mainSearch = document.getElementById('mainSearch');

export default class SearchParams {
    constructor () {
        this.mainSearch = mainSearch;
        this.tagsIngredients = this.getIngredientsSelected();
        this.tagsAppareils = this.getAppareilsSelected();
        this.tagsUstensiles = this.getUstensilesSelected();
    }
    //retourne un tableau des éléments selectionnés pour une catégorie
    getIngredientsSelected() {
        const ingredientsSelected = new Map();
        // this.tagsIngredients.clear();
        //parcour le tableau précédent et pour chaque element, stocke le texte de la balise <a> dans un nouveau tableau
        const ingredientsSelectedDom = Array.from(document.querySelectorAll('#ingredientsListParent .selected'))
        ingredientsSelectedDom.forEach( element => {
            ingredientsSelected.set(element.innerHTML);
        });
        return ingredientsSelected;
    }

    getAppareilsSelected() {
        const appareilsSelected = new Map();
        // this.tagsAppareils.clear();
        const appareilsSelectedDom = Array.from(document.querySelectorAll('#appareilsListParent .selected'))
        appareilsSelectedDom.forEach( element => {
            appareilsSelected.set(element.innerHTML);
        });
        return appareilsSelected;
    }

    getUstensilesSelected() {
        const ustensilesSelected = new Map();
        // this.tagsUstensiles.clear();
        const ustensilesSelectedDom = Array.from(document.querySelectorAll('#ustensilesListParent .selected'))
        ustensilesSelectedDom.forEach( element => {
            ustensilesSelected.set(element.innerHTML);
        });
        return ustensilesSelected;
    }
}