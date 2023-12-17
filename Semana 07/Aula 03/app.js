// m1 s07 a2

console.log("m1 s07 a2");

const spanTexto = document.getElementById('texto-salvo');
const campoTexto = document.getElementById('campo-texto');
const botaoSalva = document.getElementById('botao-salva');


//promisse revisão

const promisse1 = new Promise((resolve, reject) => {  
    resolve("sucesso p1");
    reject("error 404 p1");
});

const promisse2 = new Promise((resolve, reject) => {  
    resolve("sucesso p2");
    reject("error 404 p2");
});



Promise.all([promisse1, promisse2])
    .then((resposta) => {
        console.log({ resposta });
})
    .catch((error) => {
        console.error( error );
    })
    .finally(() => {
        console.log("Terminou Promise");
    });

    Promise.race([promisse2, promisse1]) //retorna a mais rápida
    .then((resposta) => {
        console.log({ resposta });
})
    .catch((error) => {
        console.error( error );
    })
    .finally(() => {
        console.log("Terminou Promise");
    });

//ASYNC AWAIT

const promisse3 = new Promise((resolve, reject) => {  
    resolve("sucesso p3");
    reject("error 404 p3");
});

async function lidacompromisse() {
    const resposta = await promisse3;
    console.log({resposta});
}


lidacompromisse();

const delay = (ms = 100) => {
    return new Promise((resolve) => setTimeout(() => resolve("Ok Promisse!"), ms));
  };
  
  (async () => {
    try {
      const resposta = await delay(1500);
      console.log({ resposta });
    } catch (error) {
      console.log("Erro:", error);
    } finally {
      console.log("Chegou ao fim!");
    }
  })();
  
  

console.log("Ok promise");


const spanLocal = document.getElementById("span-local");
const spanEstado = document.getElementById("span-estado");
const spanDDD = document.getElementById("span-ddd");

//modelo 1
function buscaCEP(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json`)  
        .then((cidade) =>{
        console.log(cidade);
        cidade.json()
        .then((dcidade) =>{
        console.log(dcidade);
        spanLocal.innerHTML = dcidade.localidade;
        })

//modelo 2

    fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then((estado) =>
        estado.json().then(({uf}) => {
            spanEstado.innerHTML = uf;
            }));
            })
    .catch((error) => {
                console.error(error);
            })
    .finally(() => {
            console.log("Concluida a Busca do Cep");
            })
               
        }

//         //modelo Async
async function buscaCEP2(cep2) {
    try {
        const url = `https://viacep.com.br/ws/${cep2}/json`
        const options = {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({title: "funciona mesmo", userId: 1}),
        };

        const DDD = await fetch(url)  
        
        const dddd = await DDD.json();
        
        console.log(dddd);
            spanDDD.innerHTML = dddd.ddd;
        
        } catch (error) {
            console.log(error);

        } finally {
            console.log("Concluida o Async");

    };
}
 
    //modelo Post
async function MandaTubarao() {
    try {
            const conteudo =  {title: "funciona mesmo", userId: 1};
            const url = "https://tubarao.requestcatcher.com/";
            const options = {
                method: "POST",
                body: JSON.stringify(conteudo),
            };
    
            const resposta = await fetch(url, options);
            const dados = await resposta.json();
            console.log(dados);
            
            } catch (error) {
                console.log(error);
    
            } finally {
                console.log("Concluida o Async");
    
        }
}

MandaTubarao();
buscaCEP(88745000);
buscaCEP2(88745000);


        
        


        


