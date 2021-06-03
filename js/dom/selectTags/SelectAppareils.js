export default class SelectAppareils {
    constructor(result) {
        this.result = result;
    }
    getResult() {
        return this.result;
    }
    builtFiltreAppareils() {
        let html = '';
        console.log(this.result);
        this.result.forEach(appareil => {
            html += `<a class="col-4 appareil" href="#">${appareil}</a>`;
        });
        let listSelect = document.getElementById('appareilsListParent');
        listSelect.insertAdjacentHTML('beforeend',html);
    }
}