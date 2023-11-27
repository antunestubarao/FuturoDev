// pega o peso (string)
//const peso = prompt("Informe o peso (kg):");

// pega a distância (string)
//const distancia = prompt("Informe a distânca (km):");

// converte strings pra number e calcula
//const frete = 6 * Number(peso) * Number(distancia);

// exibe o resultado do frete
//alert(`O valor do frete é R$ ${frete}`);

const campopeso = document.getElementById("peso");
const campodistancia = document.getElementById("distancia");
const campocalcular = document.getElementById("calcular");
const pfrete = document.getElementById("frete");

function frete(){
    const peso = Number(campopeso.value);
    const distancia = Number(campodistancia.value);
    const frete = 6 * peso * distancia;
    pfrete.innerHTML = `O valor do frete é R$ ${frete.toFixed(2)}`;
}

campocalcular.addEventListener("click", frete);
