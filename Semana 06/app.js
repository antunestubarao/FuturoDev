const ptexto = document.getElementById('textosalva');
const campotexto = document.getElementById('campotexto');
const botaoSalva = document.getElementById('botaosalva');

let textoatual= "texto inicial";

function atualizatela() {
    ptexto.innerHTML = textoatual;
}

function salvartexto() {
    ptexto.innerHTML = textoatual;
}
botaoSalva.addEventListener('click', salvartexto);
