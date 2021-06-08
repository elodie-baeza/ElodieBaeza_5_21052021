//affiche dans le DOM le tag lors de la selection d'un ingredient, d'un appareil ou d'un ustensile
export default class DomTag {
    constructor(name, category){
        this.name = name;
        this.category = category;
    }

    render() {
        return `
        <div class="badge badge--${this.category}">
            <span>${this.name}</span>
            <i class="far fa-times-circle btn" type="button"></i>
        </div>
        `;
    }
}