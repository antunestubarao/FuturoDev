

const nome = prompt("Insira seu Nome Completo");
const inicio = prompt("Qual a data do início das férias?");
const fim = prompt("Qual a data do término das férias?");


document.write(`<h1>Carta de Pedido de Férias</h1>
<p>‌Caro(a) responsável,</p>
<p>Gostaria de solicitar minhas férias.</p>

<p>Funcionário: ${nome},</p>
<p>Gostaria de informar que pretendo tirar férias no 
período de ${inicio} a ${fim}. </P>
<p>Agradeço desde já a atenção.</p>
<p>Atenciosamente,</p>
<p>${nome}</p>`);