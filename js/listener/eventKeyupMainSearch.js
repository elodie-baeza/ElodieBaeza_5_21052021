import DomRecipes from '../dom/recipes/DomRecipes.js';
import SearchServices from '../search/searchServices/SearchServices.js';

export default function eventKeyupMainSearch() {

    document.getElementById('mainSearch').addEventListener('keyup', function() {
        DomRecipes.builtRecipes(SearchServices.launchSearch().recipes) 
    })
}