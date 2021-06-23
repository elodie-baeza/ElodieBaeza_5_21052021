import { searchServices } from '../app.js';

export default function eventKeyMainSearch() {
    document.getElementById('mainSearch').addEventListener('keyup', function(){
        searchServices.launchSearch();
    })
    document.getElementById('mainSearch').addEventListener('keydown', function(){
        searchServices.launchSearch();
    })
}