var nome = prompt("Insira seu Nome");

if (!nome) {
    alert("Insira seu Nome");
     nome = prompt("Insira seu Nome novamente")
}

var sobrenome = prompt("Insira seu Sobrenome");
var idade = prompt("Qual sua Idade");
var nomeCompleto = nome + " " + sobrenome;
alert("O aluno " + nomeCompleto + " possui " + idade + " anos de idade.");

// com IF
if (idade >= 18 && idade <= 60)  {
alert("O aluno " + nomeCompleto + " é maior de idade.");
} else if (idade >=60)
{
    alert("O aluno " + nomeCompleto + " é idoso.");
}
    else {
alert("O aluno " + nomeCompleto + " é menor de idade.");
}
 
// com condicional
var maiorIdade = idade >=18 ? "Maior de Idade" : "Menor de Idade";
alert(maiorIdade);

var ehPar = idade %2 == 0 ? "par" : "impar";
alert("é par ou impar: " + ehPar);
