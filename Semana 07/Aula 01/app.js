// m1 s07 a1

const spanTexto = document.getElementById('texto-salvo');
const campoTexto = document.getElementById('campo-texto');
const botaoSalva = document.getElementById('botao-salva');


let listaDeObjetos = [
    {id: 1, nome: "Lavar"}, 
    {id: 2, nome: "Secar"},
    {id: 3, nome: "Guardar"},
];

function recuperaTexto() {
    const valorRecuparado = localStorage.getItem("texto");
    if (valorRecuparado) {
        listaDeObjetos = JSON.parse(valorRecuparado);
    }
}


function atualizatela() {
    spanTexto.innerHTML = listaDeObjetos.map((obj) => obj.nome).join(", ");

}



function salvartexto() {
    listaDeObjetos.push({
        id: Date.now(),
        nome: campoTexto.value,
    });
    //local storage so guarda texto
    localStorage.setItem("texto", JSON.stringify(listaDeObjetos));

    atualizatela();

   
}

botaoSalva.addEventListener("click", salvartexto);



recuperaTexto();
atualizatela();

//promisses

const sucesso = !true; //o ponto exclamacao inverte o valor

const minhapromisse = new Promise((resolve, reject) => {
    if(sucesso) {
        resolve("deu certo");
    }
    reject("deu zebra");

});

minhapromisse
    .then((value) => {
        console.log(value)
    })
    .catch((err) => {
        console.log(err)
    }) //catch faz que nao pare a execução achando que é um erro
    .finally(() => {
        console.log("Finally")
    });

// console.log("minhapromisse");
// console.log("ultimapromisse");


// const objetoExemplo = {
//     id: 1,
//     nome: "Lavar",
//     Feito: false,
// };

// console.log(objetoExemplo);