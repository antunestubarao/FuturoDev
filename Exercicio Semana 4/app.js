//S04

const campoproduto = document.getElementById("produto");
const campoadicionar = document.getElementById("adicionar");
const campolista = document.getElementById("lista");



let listacontrole = [
    {
        nome: "Salame",
        feito: false,
        preco: 7,
        quantidade: 1
    },
    {
        nome: "Carvão",
        feito: false,
        preco: 6,
        quantidade: 1
    },
    {
        nome: "carne",
        feito: false,
        preco: 12,
        quantidade: 1
    },
    {
        nome: "Pão",
        feito: false,
        preco: 2,
        quantidade: 1
    },
];

function removeItem (itemremovido) {
    const novalistacontrole = listacontrole.filter((itemdalista) => {
        return itemdalista !== itemremovido;
    });
    listacontrole = novalistacontrole;
    atualizaTela();
}

function criaItemLista(item) {
    const novoItem = document.createElement("li");
    const checado = item.feito? "checked" : "";

    novoItem.innerHTML = `
    <input type="checkbox" ${checado}>
    <span>${item.nome}</span>
    <button>excluir</button>
`;
novoItem.className = "item";

const botaoRemover = novoItem.querySelector("button");
botaoRemover.addEventListener("click", () => {
    removeItem(item);
});
return novoItem;
}

function atualizaTela() {
    campolista.innerHTML = "";

listacontrole.forEach((item) => {
    const novoItem = criaItemLista(item);
    campolista.appendChild(novoItem);
});
}

atualizaTela();

function adicionaitem() {
    if(campoproduto.value) {
    const newItem = {
        nome: campoproduto.value,
        feito: false,
        preco: 0,
        quantidade: 0
    };
    listacontrole.push(newItem);
    campoproduto.value = "";
    atualizaTela();
}
};

campoadicionar.addEventListener("click", adicionaitem);
