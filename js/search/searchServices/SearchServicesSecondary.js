export default class SearchServiceSecondary {
    static research(searchResult, searchParams) {
        this.secondarySearchResult = new Set()

        if (searchParams.ingredientsSelected.size > 0) {
            searchParams.ingredientsSelected.forEach(ingrSelected => {
                searchResult.forEach(recipe => {
                    recipe.ingredients.forEach(ingredient => {
                        if (ingredient.ingredient.indexOf(ingrSelected) > -1) {
                            this.secondarySearchResult.add(recipe)
                        }
                    });
                });
            });
        }
        if (searchParams.appareilsSelected.size > 0) {
            searchParams.appareilsSelected.forEach( appSelected => {
                searchResult.forEach(recipe => {
                    if (recipe.appliance == appSelected) {
                        this.secondarySearchResult.add(recipe)
                    }
                });
            });
        }
        if (searchParams.ustensilesSelected.size > 0) {
            searchParams.ustensilesSelected.forEach(ustSelected => {
                searchResult.forEach(recipe => {
                    if (recipe.ustensils.indexOf(ustSelected) > -1) {
                        this.secondarySearchResult.add(recipe)
                    }
                });
            });
        }
        return this.secondarySearchResult
    }
}