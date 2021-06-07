//transforme une phrase en tableau de mots (ex: jus de citron --> ['jus', 'citron']) 
export function transformSentence(sentence) {
    var words = [];

    //supprime la ponctuation
    var punctRE = /[\u2000-\u206F\u2E00-\u2E7F\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
    var spaceRE = /\s+/g;
    sentence = sentence.replace(punctRE, '').replace(spaceRE, ' ');

    //remplace les lettres avec accent par des lettres sans accent
    sentence = sentence.normalize('NFD').replace(/[\u0300-\u036f]/g, '')            

    //met chaque mot de la phrase, en minuscule, dans une table
    words = sentence.toLowerCase().split(' ');

    //supprime du tableau les mots infèrieurs à 4 lettres et "dans"
    for (let i=0 ; i < words.length ; i++) {
        // supprime les articles: si le mot est inférieur à 4 caractères, supprime le mot du tableau
        if (words[i].length < 4) {
            words.splice(i,1);
            i -= 1
        } 
        //sinon supprime 'dans'
        else {
            switch (words[i]) {
                case 'dans':
                    words.splice(i,1);
                    i -= 1
                    break;
            
                default:
                    break;
            }
        }
    }
    return words;
}