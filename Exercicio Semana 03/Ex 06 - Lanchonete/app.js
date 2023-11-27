// pega o peso (string)
//const peso = prompt("Informe o peso (kg):");

// pega a distância (string)
//const distancia = prompt("Informe a distânca (km):");

// converte strings pra number e calcula
//const frete = 6 * Number(peso) * Number(distancia);

// exibe o resultado do frete
//alert(`O valor do frete é R$ ${frete}`);

const campoCodigo = document.getElementById("codigo");
const campoqtde = document.getElementById("valor");
const campocalcular = document.getElementById("calcular");
const pvalor = document.getElementById("valorPedido");

function pedido(){
    const codigo = (campoCodigo.value);
    const qtde = Number(campoqtde.value);
    let preco = 0;
    let nome =  "";

    //estrutura com switching
    switch (codigo) {
        case "1123":
            preco = 12;
            nome = "Hamburguer"
            break;
        case "3423":
            preco = 9;
            nome = "Sanduiche de Pernil"
            break;
        case "4521":
            preco = 15;
            nome = "Bauru"
            break;
        case "5322":
            preco = 34.99;
            nome = "Sanduiche de Mortadela"
            break;
        default:
            alert("Código inválido!");
            break;
    }
    
   
    //estrutura de IF
        //    if(codigo === "1123") {
        //     preco = 12;
        //     nome = "Hamburguer"
        //    } else if (codigo === "3423") {
        //     preco = 9
        //     nome = "Sanduiche de Pernil"
        //    } else if (codigo === "4521") {
        //     preco = 15
        //     nome = "Bauru"

        //     } else if (codigo === "5322") {
        //     preco = 34.99   
        //     nome = "Sanduiche de Mortadela"

        //    }

   const valor = preco * qtde

   pvalor.innerHTML = `O valor de ( ${qtde} ) ${nome} do pedido custa R$ ${valor}`;
   
}
   
    console.log(codigo, valor)
    
campocalcular.addEventListener("click", pedido);