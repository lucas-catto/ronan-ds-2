
var number = Math.floor(Math.random() * 5);

var images =  [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
];

var vizualize = images[number];
document.write(`<img src="${vizualize}">`);
