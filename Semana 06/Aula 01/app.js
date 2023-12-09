// alert("the background color will change")

document.body.style.backgroundColor =  "rgb(222,222,222)";

function minhaFuncao() {
    let elemento = document.querySelector("#meuDiv");
    elemento.style.backgroundColor =  "gray";
    elemento.hidden = false;    
}

    
var button = document.getElementById("button");
button.addEventListener("mouseenter", mouseenter);//no html vai o on na função

function mouseenter() {
  cabecalho = document.querySelector("#cabecalho1");
  cabecalho.innerHTML = "M1 S06 A01"; 
}

var button1 = document.getElementById("button");
button1.addEventListener("mouseleave", mouseleave);//no html vai o on na função

function mouseleave() {
  alert("mouse saiu!"); 
}

var botaodesabilitar = document.querySelector("#caiFora");
botaodesabilitar.addEventListener("click", click);

function click() {
  button1.removeEventListener("mouseleave", mouseleave);
}

var campoTexto = document.querySelector("#beforeall");
console.log("Teste de campo");

var addbefore = document.querySelector("#before");
console.log("ateste");

addbefore.addEventListener("click", newclick);

let newput;
function newclick() {
  console.log("clicou");
  newput = document.createElement("input");
  newput.type = "text";
  newput.placeholder = "teste";
  divForm.insertBefore(newput, campoTexto);
}

var createTexto = document.querySelector("#create");
console.log("Teste create");

var createbefore = document.querySelector("#insert");
console.log("ateste");
createbefore.addEventListener("click", createclick);

function createclick() {
  console.log("clicouBefore");
  newput = document.createElement("input");
  newput.type = "text";
  newput.placeholder = "Digite seu Sobrenome:";
  divForm.insertBefore(newput, createTexto);
}

var botaoclean = document.querySelector("#clean")
console.log("botaoclean");
botaoclean.addEventListener("click", funClean);

function funClean() {
  console.log("clicouclean");
  divForm.removeChild(newput);
} 



