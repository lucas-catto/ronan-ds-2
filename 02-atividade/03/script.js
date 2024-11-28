
var icons = document.querySelectorAll('.icon');
var default_icon = document.querySelector('#default img');

for (let i = 0; i < icons.length; i++) {
    
    icons[i].addEventListener('mouseover', () => {
        default_icon.src = icons[i].src;
    });
}
