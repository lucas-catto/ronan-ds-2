
var number = Math.floor(Math.random() * 5);

var images =  [
    [
        'Banco de Dados III',
        'img/01.jpg'
    ],
    [
        'Desenvolvimento de Sistemas II',
        'img/02.jpg'
    ],
    [
        'Internet e protocolos',
        'img/03.jpg'
    ],
    [
        'Programação Web III',
        'img/04.jpg'
    ],
    [
        'Segurança de Sistemas de Informação',
        'img/05.jpg'
    ],
];

var vizualize = images[number];

document.write(`<h2>${vizualize[0]}</h2>`);
document.write(`<img src="${vizualize[1]}">`);
