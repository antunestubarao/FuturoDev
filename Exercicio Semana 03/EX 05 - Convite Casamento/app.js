

const nome = prompt("Insira o nome da pessoa convidada");
const noivo = prompt("Insira o nome do noivo");
const noiva = prompt("Insira o nome da noiva");
const data = prompt("Qual a data do casamento?");
const hora = prompt("Qual a hora do casamento?");


document.write(`<h2>Convite de Casamento</h2>
<p>‌Caro(a) ${nome}!</p>

<p>Você está convidado(a) para o casamento de ${noivo} e ${noiva},
a ser realizado no dia ${data}, às ${hora} horas. </P>
<p>Contamos com a sua presença!.</p>
<p>Atenciosamente,</p>
<p>${noivo} e ${noiva}</p>`);