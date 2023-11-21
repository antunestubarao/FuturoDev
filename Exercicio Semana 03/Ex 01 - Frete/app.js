// pega o peso (string)
const peso = prompt("Informe o peso (kg):");

// pega a distância (string)
const distancia = prompt("Informe a distânca (km):");

// converte strings pra number e calcula
const frete = 6 * Number(peso) * Number(distancia);

// exibe o resultado do frete
alert(`O valor do frete é R$ ${frete}`);