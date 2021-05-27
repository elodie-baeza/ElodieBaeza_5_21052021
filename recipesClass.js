class recipe {
    constructor(id, name, portions, temps, description, appareil){
        this.id = id;
        this.name = name;
        this.portions = portions;
        this.ingredients = [];
        this.temps = temps;
        this.description = description;
        this.appareil = appareil;
        this.ustensiles = [];
    }
}

class ingredient {
    constructor(ingredient, quantite, unite){
        this.ingredient = ingredient;
        this.quantite = quantite;
        this.unite = unite;
    }
}