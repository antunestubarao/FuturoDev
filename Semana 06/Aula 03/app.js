//alert("the background color will change")

function atualizaRelogio() {
    var dataHora = new Date();
    var hora = dataHora.toLocaleTimeString();
    document.querySelector("p#relogio").textContent = hora;
}

setInterval(atualizaRelogio, 1000);

// setTimeout(function() {
//     alert("the background color will");
//     document.body.style.backgroundColor =  "rgb(222,222,222)";
// }, 2000);



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

// var button1 = document.getElementById("button");   
//     button1.addEventListener("mouseleave", mouseleave);//no html vai o on na função

//     function mouseleave() {
//     alert("mouse saiu!");

// }

var botaodesabilitar = document.querySelector("#caiFora");
    botaodesabilitar.addEventListener("click", click);
    
    function click() {
    button1.removeEventListener("mouseleave", mouseleave);
       
}

// var addInput1 = document.querySelector("#insert");
//     addInput1.addEventListener("click", clickAddInput);
        
//     function clickAddInput() {
//     const newinput = document.createElement("input");
//     newinput.type = "text";
//     newinput.placeholder = "Digite seu nome";
//     document.body.appendChild(newinput);
// }

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
        console.log("clicou");
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

    btnsalvar = document.querySelector("#btnsalvar")
    btnsalvar.addEventListener("click", salvar);

    function salvar() {
    localStorage.setItem("nome", document.querySelector("#nome").value);
}

    document.querySelector("#btnlimpar").addEventListener("click", limpar);

    function limpar() {
    localStorage.clear();
}

document.querySelector("#btnPet").addEventListener("click", salvaPet);

function salvaPet() {
    listaPet = [];
    listaPet[0] = document.querySelector("#pet1").value;
    listaPet[1] = document.querySelector("#pet2").value;

    localStorage.setItem("listaPet", JSON.stringify(listaPet));

    if (localStorage.getItem("listaPet")) {
        var listaPetStorage = JSON.parse(localStorage.getItem("listaPet"));
        listaPetStorage.forEach(pet => {
            var listaItemPet = document.createElement("li");
            listaItemPet.innerText = pet;
        document.querySelector("#list").appendChild(listaItemPet);
    });
    }
}

document.querySelector("#btnDeletaPet").addEventListener("click", limparpet);

    function limparpet() {
    localStorage.clear();
}



