
// random => gera um número entre 0 e 1, como 0.5
// floor => arredonda para baixo
// "* 5" => para gerar um número até 5.99, com floor arredonda para 5
var number = Math.floor(Math.random() * 5);

var images =  [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
];

var vizualize = images[number];

document.write('<h1><===== APERTE F5 =====></h1>');
document.write(`<img src="${vizualize}">`);
