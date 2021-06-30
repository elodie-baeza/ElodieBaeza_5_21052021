import { searchServices } from '../app.js';
import DomTag from '../dom/selectTags/DomTag.js';

export default function eventClickFilter(filtresContainer) {
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
        inputIngredients.value = '';
        inputAppareils.value = '';
        inputUstensiles.value = '';

        eventClickTags();
        searchServices.launchSearch();
    }));
}

export function eventClickTags() {
    //au click sur un tag, ferme le tag et enlève la class selected dans le DOM
    document.querySelectorAll('#tagsContainer i').forEach(tag => tag.addEventListener('click', function (event){
        //récupère le texte du tag à fermer
        const txtTagToRemove = event.target.parentNode.querySelector('#tagsContainer span').innerHTML;
        //recupère la class du tag clické
        let tagClass = event.target.parentNode.className
        //cherche en fonction de la classe, le filtre dans la bonne catégorie
        let selectedClass = []
        switch (tagClass) {
            case 'badge badge--ingredient':
                selectedClass = document.getElementsByClassName('ingredient selected');
                break;
        
            case 'badge badge--appareil':
                selectedClass = document.getElementsByClassName('appareil selected');
                break;
        
            case 'badge badge--ustensile':
                selectedClass = document.getElementsByClassName('ustensile selected');
                break;
        
            default:
                selectedClass = document.getElementsByClassName('selected');
                break;
        }
        //supprime class 'selected' dans HTML
        const selectedClassArray = Array.from(selectedClass);
        let index = selectedClassArray.findIndex(toto => toto.innerHTML === txtTagToRemove);
        selectedClass[index].classList.remove('selected');
        //ferme le tag = supprime div 'badge' dans html
        event.target.parentNode.remove();

        searchServices.launchSearch();
    }));
}