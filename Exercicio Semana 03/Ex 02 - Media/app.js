// pega a nota (string)
const nota1 = prompt("Informe a nota da primeira avaliação:");
const nota2 = prompt("Informe a nota da segunda avaliação:");
const nota3 = prompt("Informe a nota da terceira avaliação:");

// converte strings pra number e calcula
const media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;

// exibe o resultado da media
alert(`Amédia final é ${media}`);