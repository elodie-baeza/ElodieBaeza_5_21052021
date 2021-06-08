import searchFilter from "../search/searchFilter.js";

export default function eventKeyupInput() {
    const inputIngredients = document.getElementById('inputIngredients');
    const inputAppareils = document.getElementById('inputAppareils');
    const inputUstensiles = document.getElementById('inputUstensiles');

    const contIngredients = document.getElementById('ingredientsListParent');
    const contAppareils = document.getElementById('appareilsListParent');
    const contUstensiles = document.getElementById('ustensilesListParent');

    var showRowIngr = document.querySelector('#contIngredients>div')
    var showRowApp = document.querySelector('#contAppareils>div')
    var showRowUst = document.querySelector('#contUstensiles>div')

    var expandIngrList = document.getElementById('btnIngredients')
    var expandAppList = document.getElementById('btnAppareils')
    var expandUstList = document.getElementById('btnUstensiles')

    inputIngredients.addEventListener('keyup', () => {
        searchFilter(inputIngredients, contIngredients);

        showRowIngr.classList.add('show')
        contIngredients.classList.add('show')
        expandIngrList.setAttribute('aria-expanded', true)
    });
    
    inputAppareils.addEventListener('keyup', () => {
        searchFilter(inputAppareils, contAppareils);

        showRowApp.classList.add('show')
        contAppareils.classList.add('show')
        expandAppList.setAttribute('aria-expanded', true)
    });

    inputUstensiles.addEventListener('keyup', () => {
        searchFilter(inputUstensiles, contUstensiles);

        showRowUst.classList.add('show')
        contUstensiles.classList.add('show')
        expandUstList.setAttribute('aria-expanded', true)
    });

}