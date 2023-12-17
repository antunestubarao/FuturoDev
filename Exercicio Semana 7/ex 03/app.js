// M1 S07 EX03

console.log("M1 S07 EX03");

const campoCEP = document.getElementById('campo-CEP');
const botaoSalva = document.getElementById('botao-salva');

console.log({campoCEP, botaoSalva});


const spanLocal = document.getElementById("span-local");
const spanEstado = document.getElementById("span-estado");
const spanDDD = document.getElementById("span-ddd");

botaoSalva.addEventListener("click", () => {
    const cepinformado = campoCEP.value.trim();

    if (cepinformado){
        buscaCEP(cepinformado);
    };
})

async function buscaCEP(cep) {
    try {
        const url = `https://viacep.com.br/ws/${cep}/json`
        
        //localidade
        const local = await fetch(url)  
        const localidade1 = await local.json();
        console.log(localidade1);
        spanLocal.innerHTML = localidade1.localidade;


        //DDD
        const DDD = await fetch(url)  
        const dddd = await DDD.json();
        console.log(dddd);
        spanDDD.innerHTML = dddd.ddd;
    
        //estado
        const estado = await fetch(url)  
        const Pestado = await estado.json();
        console.log(Pestado);
        spanEstado.innerHTML = Pestado.uf;



    } catch (error) {
        console.log(error);
        spanLocal.innerHTML = "Deu uma zebrinha MAN!"
        
    } finally {
            console.log("Concluida o Async");

    };
}
 
  





        
        


        


