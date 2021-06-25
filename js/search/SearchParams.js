export default class SearchParams {
    constructor () {
        this.mainInput = document.getElementById('mainSearch').value;
        this.ingredientsSelected = this.getIngredientsSelected();
        this.appareilsSelected = this.getAppareilsSelected();
        this.ustensilesSelected = this.getUstensilesSelected();
        this.allSelected = new Set([...this.getIngredientsSelected(),...this.getAppareilsSelected(),...this.getUstensilesSelected()]);
    }
    isEmpty() {
        return this.mainInput.trim().length <=2
            && (this.ingredientsSelected.size == 0
            && this.appareilsSelected.size == 0
            && this.ustensilesSelected.size == 0)
    }
    asMainInput() {
        return this.mainInput.trim().length > 2
            && (this.ingredientsSelected.size == 0
            && this.appareilsSelected.size == 0
            && this.ustensilesSelected.size == 0)
    }
    asOnlyTags() {
        return this.mainInput === ''
            && (this.ingredientsSelected.size !== 0
            || this.appareilsSelected.size !== 0
            || this.ustensilesSelected.size !== 0)
    }
    asMainInputAndTags() {
        return this.mainInput.trim().length > 2
            && (this.ingredientsSelected.size !== 0
            || this.appareilsSelected.size !== 0
            || this.ustensilesSelected.size !== 0)
    }
    getIngredientsSelected() {
        const ingredientsSelected = new Set();

        //boucle sur le tableau précédent et pour chaque element, stocke le texte de la balise <a> dans un nouveau tableau
        const ingredientsSelectedDom = Array.from(document.querySelectorAll('#ingredientsListParent .selected'));
        ingredientsSelectedDom.forEach( element => {
            ingredientsSelected.add(element.innerHTML);
        });
        return ingredientsSelected;
    }
    getAppareilsSelected() {
        const appareilsSelected = new Set();
        const appareilsSelectedDom = Array.from(document.querySelectorAll('#appareilsListParent .selected'));
        appareilsSelectedDom.forEach( element => {
            appareilsSelected.add(element.innerHTML);
        });
        return appareilsSelected;
    }
    getUstensilesSelected() {
        const ustensilesSelected = new Set();
        const ustensilesSelectedDom = Array.from(document.querySelectorAll('#ustensilesListParent .selected'));
        ustensilesSelectedDom.forEach( element => {
            ustensilesSelected.add(element.innerHTML);
        });
        return ustensilesSelected;
    }
}