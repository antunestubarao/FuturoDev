//m10502

import { numeros, exemploDeFuncao } from "./app-modulo.js";
// ,/esta na mesma pasta ,,/sobe uma pasta.
console.log(numeros);
exemploDeFuncao();

const vetor = ["gol", "corsa", "tcross"];
vetor.push("saveiro");

vetor.forEach((item) => {
    console.log(item);
});

//Objetos

const tarefas = [
    {
    nome: "lavar",
    feito: true,
    categoria: ["inicio", "Meio", "Fim"]
},
{
    nome: "secar",
    feito: true,
    categoria: ["inicio", "Meio", "Fim"]
},
{
    nome: "polir",
    feito: true,
    categoria: ["inicio", "Meio", "Fim"]
},
];
tarefas.forEach((item) => { 
    console.log(item);
    console.log(item.feito);
    console.log(item.feito, item.categoria[2]);
});
console.log(tarefas);
console.log(tarefas[2]);
console.log(tarefas[2].nome);
console.log(tarefas[2].categoria[1]);


const pessoa = {
    nome: "Maria",
    idade: 25,
    peso: 70,
    altura: 1.80,
    imc(){
        return this.peso / (this.altura * this.altura);
    }
};

pessoa.cor = "branca" 

console.log(pessoa);
console.log(pessoa.nome);