// o valor do salário bruto
const salario = prompt("Informe o valor do seu salário (R$):");

// calcula o valor do FGTS
const FGTS = 0.08 * Number(salario);

// calcula acumulado ao ano
const FGTSAnal = 12 * FGTS;

// exibe o resultado do FGTS
alert(`O valor FGTS mensal foi de R$: ${FGTS}`);
alert(`O valor anual do FGTS foi de R$: ${FGTSAnal}`);