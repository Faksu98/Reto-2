const CASILLAS_MAX = 20; 
 
let f = "por def"; 
 
for (let i = 1 ; i <= CASILLAS_MAX ; i++){ 
    document.querySelector("#casillas").innerHTML+=` 
    <input id="casi${i}" type="checkbox">Casilla ${i} <br> 
    `; 
} 
function alterar(){ 
    f = Number(document.querySelector("#alterar_casillas").value); 
    for (let n = 1 ; n <= CASILLAS_MAX ; n = n + f){ 
        document.querySelector(`#casi${n}`).checked = true; 
    } 
}