// m1 s07 a3

console.log("m1 s07 a3");


// ex rest
function infosPessoais(par1, par2, par3, par4, par5, par6) {
    
    console.log(par1, par2, par3, par4, par5, par6);
  }

  infosPessoais("b", false, 3, "c", "d", 4);

  
function infos(...infos) {
    
    console.log(infos);
  }

  infosPessoais("A", true, 2, "B", "F", 3);
  

  //ex spread

  const infospread = ["A", true, 2, "B", "F", 3];

  function exspread(par1, par2) {
    
    console.log(par1, par2,);
  }

    
exspread(...infospread);
exspread(infospread);

//spread com array

const VetA = ["A", "B", "C", "D", "E", "F"];

const VetB = [...VetA];

VetA[1] = 1977;

console.log(VetA, VetB);
console.log(VetA === VetB);

//spread com objetos

const objtA = {a: "A", b: "B", c: "C"};
const objtB = {...objtA};

objtA.a = 333;

console.log(objtA, objtB);


//destructuring

//ex antigo

const coord = {x:1, y:2, z:3};
function calculaAlgo(coordenadas) {
    const x = coordenadas.x;
    const y = coordenadas.y;
    const z = coordenadas.z;
    return x+ y+z;
}

//ex com destructuring

function calculaAlgo2 ({x, y, z}) { 
    return x - y + z;
}

console.log(calculaAlgo(coord));
console.log(calculaAlgo2(coord));
  