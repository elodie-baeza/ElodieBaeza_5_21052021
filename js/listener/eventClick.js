import DomTag from '../dom/selectTags/DomTag.js';

export function eventClickFilter(filtresContainer) {
    const tagsContainer = document.querySelector('.tagsContainer');
    const inputIngredients = document.getElementById('inputIngredients');
    const inputAppareils = document.getElementById('inputAppareils');
    const inputUstensiles = document.getElementById('inputUstensiles');

    //au click sur un filtre ajoute le tag
    filtresContainer.forEach(filtre => filtre.addEventListener('click', function (event){
        const name = event.target.innerHTML;
        const category = event.target.classList[1];
        const tag = new DomTag(name, category);
        //affiche le tag de l'élément
        if (event.target.classList.contains('selected') !== true) {
            tagsContainer.innerHTML += tag.render();
        }
        //ajoute la class "selected" dans le DOM de l'élément
        event.target.classList.add('selected');

        //réinitialise tous les champs de saisie des filtres
        inputIngredients.value = ''
        inputAppareils.value = ''
        inputUstensiles.value = ''
    }));
}

export function eventClickTags() {
    //au click sur un tag, ferme le tag et enlève la class selected dans le DOM
    document.querySelector('.tagsContainer').addEventListener('click', function (event){
        //récupère le texte du tag à fermer
        const txtTagToRemove = event.target.parentNode.querySelector('span').innerHTML;

        //supprime class 'selected' dans HTML
        const selectedClass = document.getElementsByClassName('selected');
        const selectedClassArray = Array.from(selectedClass);
        let index = selectedClassArray.findIndex(toto => toto.innerHTML === txtTagToRemove);
        selectedClass[index].classList.remove('selected');
        //ferme le tag = supprime div 'badge' dans html
        event.target.parentNode.remove();
    });
}

// export function eventClickSearchBtn() {
//     // const searchServices = new SearchServices();
//     //au click sur le bouton principal de recherche, récupère dans searchParams tous les inputs de l'utilisateur 
//     document.getElementById('searchBtn').addEventListener('click', function() {
//         DomRecipes.clearRecipes();
//         DomRecipes.builtRecipes(SearchServices.launchSearch().recipes) 
//     })
// }