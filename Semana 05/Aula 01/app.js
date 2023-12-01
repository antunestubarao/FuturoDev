const nome1 = "Romeu";
const nome2 = "Maria";
const nome3 = "João";
const nome4 = "Pedro";
const nome5 = "Ana";


const nomes = [nome1, nome2, nome3, nome4, nome5];

//adicionar nome:
nomes.push("mais um nome");

console.log(nomes);

console.log(nomes[2]);// vai buscar Joao, pois o indice começa do zero.

for (let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}
for (let i = 0; i < nomes.length; i++){
    console.log(nomes.at(-1));// vai buscar o último
}


//buscando com loop
const lista = document.getElementById("lista");

const tarefa = ["lavar", "passar", "guardar"];

// for (let i = 0; i < tarefa.length; i++){
//     lista.innerHTML += `<ol>${tarefa[i]}</ol>`;

// }


for (let i = 0; i < tarefa.length; i++){
    const LI = document.createElement("li");
    LI.innerHTML = `<input type= "checkbox">
    ${tarefa[i]}
    <button type>🔥</button>`;
    lista.appendChild(LI);
}




//aula 01 1:22