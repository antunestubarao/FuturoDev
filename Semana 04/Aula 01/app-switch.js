const data = prompt("Insira o mês");

const mes = Number(data);
console.log(mes);
switch (mes) {
    case 0:
    case 1:
    case 2:
        alert("Janeiro");
        break;
    case 3:
    case 4:
    case 5:
        alert("Fevereiro");
        break;
    case 6:
    case 7:
    case 8:
        alert("Março");
        break;
    case 9:
    case 10:
    case 11:
        alert("Abril");
        break;
    case 12:
    case 13:
    case 14:
        alert("Maio");
        break;
    case 15:
    case 16:
    case 17:
        alert("Junho");
        break;
    case 18:
    case 19:
    case 20:
        alert("Julho");
        break;
   default:
    alert("mes invalido");
    break;
}