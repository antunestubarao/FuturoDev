// M1 S07 EX04

console.log("M1 S07 EX04");


const campoID = document.getElementById('perfil');
const botaoSalva = document.getElementById('botao-salva');

console.log({campoID, botaoSalva});


const spanlogin = document.getElementById("span-login");
const spanRep = document.getElementById("span-rep");
const spanAvatar = document.getElementById("span-avatar");

botaoSalva.addEventListener("click", () => {
    const IDinformado = campoID.value.trim();

    if (IDinformado){
        buscaID(IDinformado);
    };
})

async function buscaID(id) {
    try {
        const url = `https://api.github.com/users/${id}`
        
        //login
        const login = await fetch(url)  
        const idlogin = await login.json();
        console.log(idlogin);
        spanlogin.innerHTML = idlogin.login;


        //Avatar
        const Avatar = await fetch(url)  
        const pAvatar = await Avatar.json();
        console.log(pAvatar);
        spanAvatar.src = pAvatar.avatar_url;
        
        
    
        //repositorio
        const repositorio = await fetch(url)  
        const prepositorio = await repositorio.json();
        console.log(prepositorio);
        spanRep.innerHTML = prepositorio.public_repos;



    } catch (error) {
        console.log(error);
        spanLocal.innerHTML = "Deu uma zebrinha MAN!"
        
    } finally {
            console.log("Concluida o Async");

    };

}





        
        


        


