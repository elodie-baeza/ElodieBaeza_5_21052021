export function formatString(str) {
    //supprime les espaces
    str = str.trim();
    //si dernière lettre est "s" alors le supprimer
    if (str.substring(str.length-1) == 's') {
       str = str.substr(0, str.length-1)
    }
    //renvoie une chaine en majuscule et sans accents
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
}