import { formatString } from "./formatString.js";

//transforme une phrase en tableau de mots (ex: jus de citron --> ['jus', 'citron']) 
export function tableOfWords(sentence) {
    var tableOfWords = [];
    let format = formatString(sentence)

    //met chaque mot de la phrase, en minuscule, dans une table
    tableOfWords = format.split(' ');

    //supprime du tableau les mots infèrieurs à 4 lettres et "dans"
    for (let i=0 ; i < tableOfWords.length ; i++) {
        // supprime les articles: si le mot est inférieur à 4 caractères, supprime le mot du tableau
        // if (tableOfWords[i].length < 4) {
        //     tableOfWords.splice(i,1);
        //     i -= 1
        // } 
        //sinon supprime 'dans'
        // else {
            switch (tableOfWords[i]) {
                case 'DANS':
                    tableOfWords.splice(i,1);
                    i -= 1
                    break;
                case 'DES':
                    tableOfWords.splice(i,1);
                    i -= 1
                    break;
                case 'DE':
                    tableOfWords.splice(i,1);
                    i -= 1
                    break;
            
                case 'LE':
                    tableOfWords.splice(i,1);
                    i -= 1
                    break;
            
                case 'LA':
                    tableOfWords.splice(i,1);
                    i -= 1
                    break;
            
                case 'ET':
                    tableOfWords.splice(i,1);
                    i -= 1
                    break;
            
                case "L'":
                    tableOfWords.splice(i,1);
                    i -= 1
                    break;
            
                case "D'":
                    tableOfWords.splice(i,1);
                    i -= 1
                    break;
    
                default:
                    break;
            }
        // }
    }
    
    console.log(tableOfWords);
    return tableOfWords;
}