const CASILLAS_MAX = 20;

let f = "por def";

/*

Esto deberia crear las casillas
*/
for (let i = 1 ; i <= CASILLAS_MAX ; i++){
    document.querySelector("#casillas").innerHTML+=`
    <input id="Casi${i}" type="checkbox">Casilla ${i} <br>
    `;
}
function alterar(){
    /*
        if (f != "por def"){
       document.querySelector(`#Op${f}`).innerHTML= `
       <input id="Casi${f}" type="checkbox">Casilla ${f} <br>
       `;
    }
    */
    f = document.querySelector("#alterar_casillas").value;
    for (let n = 1 ; n <= f ; n++){
        document.querySelector(`#Casi${n}`).innerHTML+=`
        <input type="checkbox" checked="checked"/>
        `;
    }
}
