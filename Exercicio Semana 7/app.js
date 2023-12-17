//S04

const campoproduto = document.getElementById("produto");
const campoadicionar = document.getElementById("adicionar");
const campolista = document.getElementById("lista");



let listacontrole = [
    {
        id: 1,
        nome: "Salame",
        feito: false,
        preco: 7,
        quantidade: 1
    },
    {
        id: 2,
        nome: "Carvão",
        feito: false,
        preco: 6,
        quantidade: 1
    },
    {
        
        id: 3,
        nome: "carne",
        feito: false,
        preco: 12,
        quantidade: 1
    },
    {
        id: 4,
        nome: "Pão",
        feito: false,
        preco: 2,
        quantidade: 1
    },
];

function salvarLocalStorage(){
    const listaJson = JSON.stringify(listacontrole);
    localStorage.setItem("lista",listaJson);
}

function recuperaLocalStorage(){
    const listaJson = localStorage.getItem("lista");
    if (listaJson){
        const recuperadalistaJson = JSON.parse(listaJson);
        listacontrole = recuperadalistaJson;
    }
    
}
recuperaLocalStorage();


function atualizaTela() {
    campolista.innerHTML = "";

listacontrole.forEach((item) => {
    const novoItem = criaItemLista(item);
    campolista.appendChild(novoItem);
})

    document.querySelector("#qtdTotal").innerText = listacontrole.length;

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

const checkbox = novoItem.querySelector("input");
checkbox.addEventListener("click", () => {
    atualizarcheck(item);
});

function atualizarcheck(itemcheck) {
    itemcheck.feito = !itemcheck.feito;
}

return novoItem;
}



atualizaTela();


function adicionaitem() {
    //.trim não deixa adicionar item em branco
    if(campoproduto.value.trim()) {
    const newItem = {
        id: Date.now(),
        nome: campoproduto.value,
        feito: false,
        preco: 0,
        quantidade: 0
    };
    listacontrole.push(newItem);
    campoproduto.value = "";
    atualizaTela();
    salvarLocalStorage();
    
}
}

campoadicionar.addEventListener("click", adicionaitem);

function removeItem (itemremovido) {
    if (confirm("Você tem certeza que quer remover o item: " + itemremovido.nome + "?")){
    const novalistacontrole = listacontrole.filter((itemdalista) => {
        return itemdalista !== itemremovido;
    });
    listacontrole = novalistacontrole;
    atualizaTela();
    salvarLocalStorage();
    
}
    
};
recuperaLocalStorage();
atualizaTela();


