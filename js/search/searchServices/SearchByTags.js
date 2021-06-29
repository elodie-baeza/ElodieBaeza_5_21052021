import { recipesClean } from "../../app.js";
import { formatString } from "../../utils/formatString.js";

export default class SearchByTags {
    static research(searchResultId, searchParams) {
        this.result = new Set();
        searchResultId.forEach(id => {
            if (Array.from(searchParams.allSelected).every(x => Array.from(recipesClean[id-1].allMaterial).includes(formatString(x)))) {
                this.result.add(id);
            }
        });
        return this.result;
    }
}