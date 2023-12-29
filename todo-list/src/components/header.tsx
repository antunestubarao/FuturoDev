type Headersprops = {
    Title:string;
    Subtitle?:string;
    /* o ponto de interogação transforma ele em opcional */
}

/* como o subtitle é opcional caso eu passar um subtitle 
vale o que eu passar
 , caso eu nao passe vale o Olá */
export function Header ({Title, Subtitle = "OLá"}: Headersprops) {

 return(
        <div>
            <h1>{Title}</h1>
      <span style={{ fontSize: 26 }}>{Subtitle} </span>
        </div>
    )
}

/*  */

/*  */