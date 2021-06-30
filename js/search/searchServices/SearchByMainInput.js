import { recipesClean } from "../../app.js";
import { tableOfWords } from "../../utils/tableOfWords.js";

export default class SearchByMainInput {
    static research(mainInput, resultList) {
        this.recipesResultList = new Set();

        this.arrayMainInput = tableOfWords(mainInput);

        //si dernière lettre est "s" alors le supprimer
        this.arrayMainInput.forEach((word, index) => {
            if (word.substring(word.length-1) == 'S') {
                this.arrayMainInput[index] = word.substr(0, word.length-1)
            }
        });
        console.log(this.arrayMainInput)
        resultList.forEach(recipe => {
            if (this.arrayMainInput.every(x => recipe.name.includes(x)
            || recipe.description.includes(x)
            || recipe.ingredientsString.includes(x))) {
                this.recipesResultList.add(recipesClean[recipe.id-1]);
            }
        })
        return this.recipesResultList;
    }
}