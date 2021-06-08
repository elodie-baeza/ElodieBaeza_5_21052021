import { transformSentence } from '../utils/transformSentence.js';
import DomTag from '../dom/selectTags/DomTag.js';
import SearchParams from '../search/searchParams.js';

// const tagsContainer = document.querySelector('.tagsContainer');
// var filtresAll = document.querySelectorAll('.filtresContainer a');

export default function eventClickTags(){
    const tagsContainer = document.querySelector('.tagsContainer');
    var filtresAll = document.querySelectorAll('.filtresContainer a');
    const inputIngredients = document.getElementById('inputIngredients');
    const inputAppareils = document.getElementById('inputAppareils');
    const inputUstensiles = document.getElementById('inputUstensiles');

    //au click sur un filtre ajoute le tag
    filtresAll.forEach(filtre => filtre.addEventListener('click', function (event){
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

    //au click sur le bouton principal de recherche, récupère dans searchParams tous les inputs de l'utilisateur
    document.getElementById('searchBtn').addEventListener('click', function (){
        var mainSearch = document.getElementById('mainSearch').value;

        var searchParams = new SearchParams(mainSearch);
        searchParams.getIngredientsSelected();
        searchParams.getAppareilsSelected();
        searchParams.getUstensilesSelected();
        console.log(searchParams);
    });

}