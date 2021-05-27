// const inputIngredients = document.getElementById('inputIngredients');

export function changePlaceholder(input, textCollapse , textExpand){
    let isExpand = input.parentElement.classList.contains('show');
    if (!isExpand){
        input.placeholder = textExpand;
    } else {
        input.placeholder = textCollapse;
    }
}

//Ajout de la liste des ingredients dans HTML
import {ingredientsArray} from './ingredientsArray.js';
const ingredientsNodeParent = document.getElementById('ingredientsListParent');

ingredientsArray.forEach(function(value) {
    let newElement = document.createElement('a');
    newElement.classList.add('col-4');
    newElement.innerHTML = value;
    ingredientsNodeParent.appendChild(newElement)
});

//normalise une suite de mots
    //supprime ' é à ê Aa la le de des

//filtre une liste à partir de lettres ou d'un ou plusieurs mots



//
export function filtreList(input, container) {
    const txt = input.value.toUpperCase();

    // ????????
    // if (txt.length > 0) {
    //     filtreList(txt)
    // }

    //supprime element dans HTML suivant texte dans input
    const a = container.getElementsByTagName("a");
    for (let i = 0; i < a.length; i++) {
        const txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(txt) < 0) {
            a[i].remove();
        } 
    }
};