
var sorteio = Math.floor(Math.random() * 11);
console.log(sorteio);
var chutes = [];

function chutar() {
    var chute = parseInt(document.getElementById('chute').value);
    
    if (chute >= 0)
    {
        chutes.push(chute);
        verificarAposta(chute);
    }
}

function verificarAposta(chute) {
    if (chute == sorteio)
    {
        document.getElementById('area-alerta')
            .innerHTML = "<div class='alert alert-success mt-5'>Você ganhou!</div>";
    }
}

function verApostas() {

    chutes.forEach((item, i) => {
        document.getElementById('area-chutes').innerHTML += `
            <li class="list-group-item">Número: ${i} - Chute: ${item} </li>
        `;
    });
}
