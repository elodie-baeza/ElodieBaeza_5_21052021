const listIngredients = document.getElementsByClassName('ingredient');
const contIngredients = document.getElementById('contIngredients');

console.table(listIngredients)

function collapseFiltre(list,filtreClass,contFiltre) {
    for (item of list){
        if (item.classList.contains('visible')) {
            item.classList.remove('visible');
        }
        item.classList.add('invisible');
    }
    if (filtreClass.parentElement.classList.contains('visible')) {
        filtreClass.parentElement.classList.remove('visible');
    } else {
        filtreClass.parentElement.classList.add('invisible');
    }
    contFiltre.classList.add('container--collapse');
}

// collapseFiltre(listIngredients, document.querySelector('.ingredient') ,contIngredients);
