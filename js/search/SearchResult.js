export default class SearchResult {
    constructor() {
        this.recipes = [],
        this.ingredients = new Set(),
        this.appareils = new Set(),
        this.ustensiles = new Set()
    }
    init() {
        this.recipes = []
        this.ingredients.clear()
        this.appareils.clear()
        this.ustensiles.clear()
    }
}