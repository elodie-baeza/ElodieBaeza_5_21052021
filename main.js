import {recipes} from './recipes.js';
console.table(recipes);
// recipes.map(item => console.log(item +1))


import {filtreList} from './filtreList.js';
import {changePlaceholder} from './filtreList.js';

const inputIngredients = document.getElementById('inputIngredients');
const btnIngredients = document.getElementById('btnIngredients');

btnIngredients.addEventListener('click',function(){
    changePlaceholder(inputIngredients,'Ingredients','Recherche un ingrédient')
});


//Filtre la liste à chaque lettre saisie dans le champ de recherche
inputIngredients.addEventListener('keyup', function() {

    //developpe la liste des ingredients
    this.parentElement.classList.add('show');
    ingredientsListParent.classList.add('show');


    //filtre la liste
    filtreList(inputIngredients,ingredientsListParent);
});


//keydown event

//