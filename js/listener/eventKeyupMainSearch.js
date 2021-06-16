import { searchServices } from '../app.js';

export default function eventKeyupMainSearch() {
    document.getElementById('mainSearch').addEventListener('keyup', function(){
        searchServices.launchSearch()    
    })
}