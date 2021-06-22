//filtre la liste de choix suivant le texte saisi dans input
export default function searchFilter(input, containerList) {
    var txtValue;
    var filter = input.value.toUpperCase();

    var elementOfList = containerList.getElementsByTagName('a');
    // var elementOfList = [...containerList.getElementsByTagName('a')]

    // boucle sur chaque element du filtre et le cache si il est différent de l'input

    Array.prototype.forEach.call(elementOfList, element => {
    // elementOfList.forEach(element => {
        txtValue = element.textContent || element.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        // element.style.display = "";
        element.classList.remove('hide');
        } else {
        // element.style.display = "none";
        element.classList.add('hide');
        }
    });
}