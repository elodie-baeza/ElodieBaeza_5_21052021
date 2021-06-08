
export default function searchFilter(input, containerList) {
    // Declare variables
    var txtValue;
    var filter = input.value.toUpperCase();
    var elementOfList = containerList.getElementsByTagName('a');
    // Loop through all list items, and hide those who don't match the search query
    for (let i = 0; i < elementOfList.length; i++) {
        txtValue = elementOfList[i].textContent || elementOfList[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        elementOfList[i].style.display = "";
        } else {
        elementOfList[i].style.display = "none";
        }
    }
}