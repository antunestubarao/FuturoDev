const campoTarefa = document.getElementById("tarefas");
const campobotao = document.getElementById("botao");
const lista = document.getElementById("lista");

const tarefa = ["lavar", "passar", "guardar"];

tarefa.push("mais um nome");

// tarefa.forEach(function (item, indice, vetor) {
//     console.log(item, indice, vetor);    
// });


function atualizaTela(){
        lista.innerHTML = "";
    tarefa.forEach((tarefa) => {
        const LI = document.createElement("li");
        LI.innerHTML = `<input type= "checkbox">
        ${tarefa}
        <button type>🔥</button>`;
        lista.appendChild(LI);
});
}
campobotao.addEventListener("click", () =>
{
    const newjob = campoTarefa.value;
    tarefa.push(newjob);
    atualizaTela();
    campoTarefa.value = "";
});

atualizaTela();


//MAP

const numeros = [3,8,1,6];

const retorno = numeros.map((num) => { 
    return num * 3 + 1;
});

const mapeado = numeros.map((number) => {
    return `${number}`;
});

const filtrado = numeros.filter((numeros) => {
    return numeros % 2 === 0;
});

const find = numeros.find((findN) => {
    return findN % 2 === 0;
});
const ev = numeros.every((evN) => {
    return evN > 0; //retorna se é falso ou verdadeiro em todos os elementos
});
    console.log({numeros, retorno, mapeado, filtrado, find, ev});