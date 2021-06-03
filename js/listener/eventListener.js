import { transformSentence } from '../utils/transformSentence.js';
import DomTag from '../dom/selectTags/DomTag.js';
import SearchParams from '../search/searchParams.js';



const tagsContainer = document.querySelector('.tagsContainer');
var filtresAll = document.querySelectorAll('.filtresContainer a');
const ingredients = new Set;
const appareils = new Set;
const ustensiles = new Set;

export default function eventClickTags(){

    filtresAll.forEach(filtre => filtre.addEventListener('click', function (event){
        const name = event.target.innerHTML;
        const category = event.target.classList[1];
        const tag = new DomTag(name, category);

        if (event.target.classList.contains('selected') !== true) {
            tagsContainer.innerHTML += tag.render();
        }
        event.target.classList.add('selected');
    }));

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

    document.getElementById('searchBtn').addEventListener('click', function (){
        var mainSearch = document.getElementById('mainSearch');

        var searchParams = new SearchParams();
        transformSentence(mainSearch.value),
        searchParams.getIngredientsSelected();
        searchParams.getAppareilsSelected();
        searchParams.getUstensilesSelected();
        console.log(searchParams);
    });

}