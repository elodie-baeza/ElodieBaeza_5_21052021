var mainSearch = document.getElementById('mainSearch');
var mainSearchValue;

mainSearch.addEventListener('keyup', function() {
    mainSearchValue = strNoAccent(this.value);
    searchParams = new SearchParams();
    searchResult = new SearchService(params);
    domService.buildFilters(searchParams, searchResult)
    domService.buildResult(searchResult.recipies)
});

console.log(mainSearchValue);


//supprime les accents d'un texte
function strNoAccent(a) {
    var b="áàâäãåçéèêëíïîìñóòôöõúùûüýÁÀÂÄÃÅÇÉÈÊËÍÏÎÌÑÓÒÔÖÕÚÙÛÜÝ",
        c="aaaaaaceeeeiiiinooooouuuuyAAAAAACEEEEIIIINOOOOOUUUUY",
        d="";
    for(var i = 0, j = a.length; i < j; i++) {
        //retourne la partie de la chaîne de caractères "a" comprise entre l'indice "i" de départ et 1 caractères après celui-ci.
        var e = a.substr(i, 1);
        //si "e" trouvé dans liste "b" alors retourne la partie de la liste "c" correspondante sans accent et ajoute la à "d" sinon ajoute "e" qui est donc un caractère absent de la liste "b"
        d += (b.indexOf(e) !== -1) ? c.substr(b.indexOf(e), 1) : e;
    }
    return d;
}

class SearchParams {
    constructor (mainSearch, ingredients, appareil, ustensiles) {
        this.mainSearch = mainSearch;
        this.ingredients = ingredients;
        this.appareil = appareil;
        this.ustensiles = ustensiles;
    }
}

// let searchParams = new SearchParams(mainSearchValue, );
// console.log(searchParams);