var filtresAll = document.querySelectorAll('.filtresContainer a');
var tagsContainer = document.querySelector('.tagsContainer');

//
filtresAll.forEach((filtre) => filtre.addEventListener('click', function(event){

    let filtreClass = event.target.classList.value;
    switch (filtreClass) {
        case 'col-4 ingredient':
            addTag(event.target.text,'badge--ingredient');
            break;
    
        case 'col-4 appareil':
            addTag(event.target.text,'badge--appareil');
            break;
    
        case 'col-4 ustensile':
            addTag(event.target.text,'badge--ustensile');
            break;
    
        default:
            break;
    }

    if (tagsContainer.classList.contains('removeTags') == false) {
        tagsContainer.classList.add('removeTags')
    }

    var tagsButton = document.querySelectorAll('.removeTags button');

    tagsButton.forEach((button) => button.addEventListener('click', function(event){
        event.target.parentNode.parentNode.remove();

        tagsButton = document.querySelectorAll('.removeTags button');

        if (tagsButton.length == 0) {
            tagsContainer.classList.remove('removeTags');
        }
    }));   
    
}));

function addTag(tagTxt,category) {
    var div = document.createElement('div');
    tagsContainer.appendChild(div);
    div.classList.add('badge', category);

    var span = document.createElement('span');
    div.appendChild(span);

    span.innerHTML = tagTxt;
    var button = document.createElement('button');
    div.appendChild(button);
    button.setAttribute('type','button');
    button.classList.add('btn');

    var closeIcon = document.createElement('i');
    button.appendChild(closeIcon);
    closeIcon.classList.add('far','fa-times-circle');
}