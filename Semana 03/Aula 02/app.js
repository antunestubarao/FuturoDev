//capturando o elemento do DOM (document objeto elemento)
const elemento = document.getElementById("titulo");
elemento.innerHTML = "Titulo Aula 02 alterado";
console.log(elemento);

elemento.style.color = "red";

//capturando campo dentro do inputs
const campo = document.getElementById("campo");
console.log(campo.value);
console.log(campo);

//parametros da función
function executa() {
    console.log(campo.value);
}

//chamando a function
const botao = document.getElementById("botao");
botao.addEventListener("click", executa);
