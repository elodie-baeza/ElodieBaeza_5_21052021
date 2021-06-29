import { recipesClean } from "../../app.js";
import { tableOfWords } from "../../utils/tableOfWords.js";

export default class SearchByMainInput {
    static research(mainInput, resultIdList) {
        this.recipesResultSetList = new Set();
        this.arrayMainInput = tableOfWords(mainInput);

        resultIdList.forEach(id => {
            if (this.arrayMainInput.every(x => recipesClean[id-1].name.includes(x)
            || recipesClean[id-1].description.includes(x)
            || recipesClean[id-1].ingredientsString.includes(x))) {
                this.recipesResultSetList.add(id);
            }
        })
        this.recipesArray = new Array(...this.recipesResultSetList)
        return this.recipesArray;
    }
}