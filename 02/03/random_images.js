
var images =  [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
];

var banner = document.getElementById('banner');
i = 0;

setInterval(() => {
    banner.src = images[i];
    console.log(images[i]);
    i++;
    
    if (i == 5)
    {
        i = 0;
    }
}, 1000);
