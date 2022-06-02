const CASILLAS_MAX = 20;

let f = "por def";

/*

Esto deberia crear las casillas
*/
for (let i = 0 ; i <= CASILLAS_MAX ; i++){
    document.querySelector("#casillas").innerHTML+=`
    <input id="Casi${i}" type="checkbox">Casilla ${i} <br>
    `;
}
function alterar(){
    f = document.querySelector("#alterar_casillas").value;
    for ( f ; f <= CASILLAS_MAX ; f++){
        document.querySelector(`#Casi${f}`).innerHTML+=`
        <input type="checkbox" checked="checked"/>
        `;
    }
}
