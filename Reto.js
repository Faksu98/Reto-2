const CASILLAS_MAX = 20;

let f = "por def";

for (let i = 1 ; i = CASILLAS_MAX ; i++){
    document.querySelector("#casillas").innerHTML+=`
    <input id="Casi${i}"/>Casilla ${i}
    <br/>
    `;
}