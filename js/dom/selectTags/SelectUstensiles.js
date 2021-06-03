export default class SelectUstensiles {
    constructor(result) {
        this.result = result;
    }
    getResult() {
        return this.result;
    }
    builtFiltreUstensiles() {
        let html = '';
        console.log(this.result);
        this.result.forEach(ustensile => {
            html += `<a class="col-4 ustensile" href="#">${ustensile}</a>`;
        });
        let listSelect = document.getElementById('ustensilesListParent');
        listSelect.insertAdjacentHTML('beforeend',html);
    }
}