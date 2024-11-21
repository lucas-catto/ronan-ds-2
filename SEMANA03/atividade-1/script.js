
var characters = document.querySelectorAll('.character');
var character = document.getElementById('character');

var character_photo = document.getElementById('character-photo');
var character_name = document.getElementById('character-name');

var all_characters = [
    {
        name: 'Batman',
        image: 'batman.jpg'
    },
    {
        name: 'Superman',
        image: 'super-man.jpg'
    },
    {
        name: 'Mulher-Maravilha',
        image: 'mulher-maravilha.jpg'
    },
    {
        name: 'Lanterna Verde',
        image: 'lanterna-verde.jpg'
    },
    {
        name: 'Hulk',
        image: 'hulk.jpg'
    },
    {
        name: 'Homem de Ferro',
        image: 'homem-de-ferro.jpg'
    }
];

for (let i = 0; i < characters.length; i++) {
    
    characters[i].addEventListener('click', () => {

        character_photo.src = 'img/'+all_characters[i]['image'];
        character_name.innerHTML = all_characters[i]['name'];
    });
}
