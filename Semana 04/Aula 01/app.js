var nome = prompt("Insira seu Nome");

while (!nome) {
    alert("Insira seu Nome");
     nome = prompt("Insira seu Nome novamente")
}

var sobrenome = prompt("Insira seu Sobrenome");
var idade = prompt("Qual sua Idade");
var nomeCompleto = nome + " " + sobrenome;
alert("O aluno " + nomeCompleto + " possui " + idade + " anos de idade.");

if (idade >= 18 && idade <= 60)  {
alert("O aluno " + nomeCompleto + " é maior de idade.");
} else if (idade >=60)
{
    alert("O aluno " + nomeCompleto + " é idoso.");
}
    else {
alert("O aluno " + nomeCompleto + " é menor de idade.");
}
 
// const num1 = prompt("num 01");
// const num2 = prompt("num 02");
// const soma = (Number(num1) + Number(num2));
// alert (`resultado é ${soma}`);

