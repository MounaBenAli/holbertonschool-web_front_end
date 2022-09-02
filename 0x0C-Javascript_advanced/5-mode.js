#!/usr/bin/node
//Changing DOM using vanila JS

function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style["font-size"] = size;
        document.body.style["font-weight"] = weight;
        document.body.style["text-transform"] = transform;
        document.body.style["background-color"] = background;
        document.body.style["color"] = color;
    }
}


function main () {
    //document modes
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    //adding a paragraph
    let p = document. createElement('p');
    p.innerHTML = 'Welcome Holberton!';
    document.body.appendChild(p);
    
    //creating buttons
    let btn_1 = document.createElement('button');
    btn_1.innerText = 'spooky';
    document.body.appendChild(btn_1);

    let btn_2 = document.createElement('button');
    btn_2.innerHTML = 'Dark mode';
    document.body.appendChild(btn_2);

    let btn_3 = document.createElement('button');
    btn_3.innerText = 'Scream mode';
    document.body.appendChild(btn_3);

    //adding event on click change CSS page mode
    btn_1.addEventListener('click', function () {spooky();});
    btn_2.addEventListener('click', function () {darkMode();});
    btn_3.addEventListener('click', function () {screamMode();});
}
main();

