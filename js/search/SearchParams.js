import { transformSentence } from "../utils/transformSentence.js";

export default class SearchParams {
    constructor () {
        this.mainInput = document.getElementById('mainSearch').value;
        this.ingredientsSelected = this.getIngredientsSelected();
        this.appareilsSelected = this.getAppareilsSelected();
        this.ustensilesSelected = this.getUstensilesSelected();
    }
    //
    getMainInput() {
        // var mainInput = transformSentence(document.getElementById('mainSearch'));
        return this.mainInput
    }
    isValidForPrimarySearch() {
        return this.mainInput.length > 2
    }
    isValidForSecondarySearch() {

    }
    //retourne un tableau des éléments selectionnés pour une catégorie
    getIngredientsSelected() {
        const ingredientsSelected = new Set();
        // this.tagsIngredients.clear();

        //boucle sur le tableau précédent et pour chaque element, stocke le texte de la balise <a> dans un nouveau tableau
        const ingredientsSelectedDom = Array.from(document.querySelectorAll('#ingredientsListParent .selected'))
        ingredientsSelectedDom.forEach( element => {
            ingredientsSelected.add(element.innerHTML);
        });
        return ingredientsSelected;
    }
    getAppareilsSelected() {
        const appareilsSelected = new Set();
        // this.tagsAppareils.clear();
        const appareilsSelectedDom = Array.from(document.querySelectorAll('#appareilsListParent .selected'))
        appareilsSelectedDom.forEach( element => {
            appareilsSelected.add(element.innerHTML);
        });
        return appareilsSelected;
    }
    getUstensilesSelected() {
        const ustensilesSelected = new Set();
        // this.tagsUstensiles.clear();
        const ustensilesSelectedDom = Array.from(document.querySelectorAll('#ustensilesListParent .selected'))
        ustensilesSelectedDom.forEach( element => {
            ustensilesSelected.add(element.innerHTML);
        });
        return ustensilesSelected;
    }
}