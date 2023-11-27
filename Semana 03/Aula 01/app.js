// Exercício 1 m1s03



// pega o peso (string)
//const peso = prompt("Informe o peso (kg):");

// pega a distância (string)
//const distancia = prompt("Informe a distânca (km):");

// converte strings pra number e calcula
//const frete = 6 * Number(peso) * Number(distancia);

// exibe o resultado do frete
//alert(`O valor do frete é R$ ${frete}`);

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
        console.log(campo.value);
        elemento.innerHTML = campo.value; 
        //valor value pega o que está escrito dentro do input
    }

var resposta = prompt("insira a sua idade:");
var numero = Number(resposta);
// ou var numero = +resposta; ou = parseInt(resposta);
if (numero >= 18) {
    console.log("Maior de Idade!");
} else {
    console .log("Menor de Idade :(");
}
//mostrando em prompt
if (numero >= 18) {
    alert ("Maior de Idade!");
} else {
    alert ("Menor de Idade :(");
}

//confirm + true or false
var resposta2 = confirm("Deseja Continuar?")
if (resposta2) {
    alert ("Desejou continuar");
    document.write (`Ele desejou continuar`);

} else {
    alert ("Quis ir embora");
    document.write ("Ele quis ir embora");
}

const nome = prompt("Nome");
const sobrenome = prompt("Sobrenome");
console.log (`${nome} ${sobrenome}`);
document.write (`${nome} ${sobrenome}`);
//aula 02 01/11/2023 - 