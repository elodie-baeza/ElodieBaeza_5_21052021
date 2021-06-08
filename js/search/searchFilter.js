//filtre la liste de choix suivant le texte saisi dans input
export default function searchFilter(input, containerList) {
    var txtValue;
    var filter = input.value.toUpperCase();
    var elementOfList = containerList.getElementsByTagName('a');
    // boucle sur chaque element du filtre et le cache si il est différent de l'input
    for (let i = 0; i < elementOfList.length; i++) {
        txtValue = elementOfList[i].textContent || elementOfList[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        elementOfList[i].style.display = "";
        } else {
        elementOfList[i].style.display = "none";
        }
    }
}