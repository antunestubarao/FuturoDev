// comentario em linha

var primeiravariavel = "texto qualquer"
console.log(primeiravariavel);

// pega o peso (string)
const peso = prompt("Informe o peso (kg):");

// pega a distância (string)
const distancia = prompt("Informe a distânca (km):");

// converte strings pra number e calcula
const frete = 6 * Number(peso) * Number(distancia);

// exibe o resultado do frete
alert(`O valor do frete é R$ ${frete}`);

// pega a nota (string)
const nota1 = prompt("Informe a nota da primeira avaliação:");
const nota2 = prompt("Informe a nota da segunda avaliação:");
const nota3 = prompt("Informe a nota da terceira avaliação:");

// converte strings pra number e calcula
const media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;

// exibe o resultado da media
alert(`Amédia final é ${media}`);

//definição de função
    function f(x) {
    console.log(x);
    console.log(x+3);
    }
//invocação da função    
    f(7);
    
//definição de função
    function somaTres(x, y) {
    return x + y + 3
    }
//invocação da função    
    const resultado = somaTres(7, 9);
    console.log(resultado);
    console.log(somaTres(10,1));
//do tipo da funcao
    console.log(typeof somaTres);

//capturando um elemento do DOM 
    const elemento = document.getElementById("titulo");
    console.log(elemento);
    console.log(elemento.innerHTML);
    
    //elemento.innerHTML = "Calculo de Frete 2";

    console.log(elemento.innerHTML);

    const campo = document.getElementById("campo");
    console.log(campo.value);
    

    function clicaVai(){
        console.log(campo.value)};