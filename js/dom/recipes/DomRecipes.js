import { recipes } from "../../data/recipes.js";

//affiche les recettes dans le DOM
export default class DomRecipes {
    constructor(searchResult) {
        this.searchResult = searchResult;
    }
    getResult() {
        return this.searchResult;
    }
    //affiche les recettes dans le DOM suivant résultat de recherche
    static builtRecipes(searchResult) {
        searchResult.recipes.forEach(recipe => {
            let html = '';
            html += 
            `<div class="card" id=${recipe.id}>
                <img src="./public/img/recette-cabillaud-pane-herbes-1200x619.jpg" class="card-img-top" alt="...">
                <div class="container card-body">
                    <div class="row justify-content-between">
                        <h5 class="col card-title recipesName">${recipe.name}</h5>
                        <div class="col-4">
                            <i class="far fa-clock fa-2x"></i>
                            <span class="recipesTime"><strong>${recipe.time} min</strong></span>
                        </div>
                    </div>
                    <div class="row">
                        <ul class="col-6 recipesIngredients">
                        </ul>
                        <p class="col-6 card-text recipesDescription">${recipe.description}</p>
                    </div>
                </div>
            </div>`;
            document.querySelector('.recipesContainer').insertAdjacentHTML('beforeend',html);
            //affiche ingredients-quantité-unité dans le DOM de chaque recette
            recipe.ingredients.forEach(element => {
                let unit = '';
                //affiche unité si renseignée
                if (element.unit != undefined) {
                    unit = element.unit
                }
                let htmlIngr = '';
                htmlIngr += `<li>${element.ingredient}: ${element.quantity} ${unit}</li>`;
                document.getElementById(recipe.id).querySelector('.recipesIngredients').insertAdjacentHTML('beforeend',htmlIngr);            
            })
        });
    }
}