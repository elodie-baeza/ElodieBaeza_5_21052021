import searchFilter from "../search/searchFilter.js";

//tri les filtres à la saisie d'une lettre dans les inputs ingredients / appareils / ustensiles
export default function eventKeyupSearchFilter() {
    const inputIngredients = document.getElementById('inputIngredients');
    const inputAppareils = document.getElementById('inputAppareils');
    const inputUstensiles = document.getElementById('inputUstensiles');

    const contIngredients = document.getElementById('ingredientsListParent');
    const contAppareils = document.getElementById('appareilsListParent');
    const contUstensiles = document.getElementById('ustensilesListParent');

    var showRowIngr = document.querySelector('#contIngredients>div');
    var showRowApp = document.querySelector('#contAppareils>div');
    var showRowUst = document.querySelector('#contUstensiles>div');

    var expandIngrList = document.getElementById('btnIngredients');
    var expandAppList = document.getElementById('btnAppareils');
    var expandUstList = document.getElementById('btnUstensiles');

    //A chaque saisi dans le champ ingredients
    inputIngredients.addEventListener('keyup', () => {
        //tri la liste d'ingredients suivant input
        searchFilter(inputIngredients, contIngredients);
        //expand la liste
        showRowIngr.classList.add('show');
        contIngredients.classList.add('show');
        expandIngrList.setAttribute('aria-expanded', true);
    });
    //A chaque saisi dans le champ appareils
    inputAppareils.addEventListener('keyup', () => {
        //tri la liste d'appareils suivant input
        searchFilter(inputAppareils, contAppareils);
        //expand la liste
        showRowApp.classList.add('show');
        contAppareils.classList.add('show');
        expandAppList.setAttribute('aria-expanded', true);
    });
    //A chaque saisi dans le champ ustensiles
    inputUstensiles.addEventListener('keyup', () => {
        //tri la liste d'ustensiles suivant input
        searchFilter(inputUstensiles, contUstensiles);
        //expand la liste
        showRowUst.classList.add('show');
        contUstensiles.classList.add('show');
        expandUstList.setAttribute('aria-expanded', true);
    });

}