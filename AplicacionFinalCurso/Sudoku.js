
/** el numero de espacios en blanco que contendra la matriz */
let espaciosEnBlanco = 10;
/**determina si se pone o no un valor en blanco en la matriz del usuario--1 numero 0 blanco */
let numeroOblanco = 0;
/** esta sera la matriz solución a partir de la cual se generara la matriz que 
 * vera el usuario
 */
const solucionBase = [
    [1, 2, 3, 4],
    [3, 4, 1, 2],
    [2, 1, 4, 3],
    [4, 3, 2, 1]
];
/** es la matriz aleatoria que se genererara en base a la matrizBase y que servira para comprobar la solucion */
let matrizSolucion = [];
/** es la matriz que vera el usuario */
let matrizUsuario = [];

/** mezcla los elementos de un vector */
function mezclarArray(arr) {

    return arr.sort(() => Math.random() - 0.5);
}
/**generamos la matriz aleatoria en base a solucionBase */
function generarSolucion() {

    //intercambiamos las filas
    let filas = mezclarArray([0, 1]);
    let filas2 = mezclarArray([2, 3]);
    let ordenFilas = filas.concat(filas2);
    //intercambiamos columnas
    let columnas = mezclarArray([0, 1]);
    let columnas2 = mezclarArray([2, 3]);
    let ordenColumnas = columnas.concat(columnas2);

    //construimos la matriz con los cambiamos realizados anteriormente
    for (let filas = 0; filas < 4; filas++) {

        matrizSolucion[filas] = [];
        for (let columnas = 0; columnas < 4; columnas++) {

            matrizSolucion[filas][columnas] = solucionBase[ordenFilas[filas]][ordenColumnas[columnas]];
        }
    }


}

function generarMatrizUsuario(espacios) {

    espacios = espaciosEnBlanco;
    //si quedan espacios en blanco por poner recorre la matriz poniendo valores en blanco de forma aleatoria
    while (espacios > 0) {

        for (let filas = 0; filas < matrizSolucion.length; filas++) {

            if (matrizUsuario[filas] == undefined) {
                matrizUsuario[filas] = [];
            }


            for (let columnas = 0; columnas < matrizSolucion[filas].length; columnas++) {
                //determinamos si se pone o no numero
                numeroOblanco = Math.floor(Math.random() * 2);

                if (numeroOblanco == 0 && espacios > 0 && matrizUsuario[filas][columnas] != "") {

                    matrizUsuario[filas][columnas] = "";

                    espacios--;
                } else {
                    if (matrizUsuario[filas][columnas] == undefined) {
                        matrizUsuario[filas][columnas] = matrizSolucion[filas][columnas];

                    }

                }

            }
        }

    }



}


function generacionSudoku() {

    //se crea la matrizSolucion
    generarSolucion();

    //obtenemos la matriz del usuario con espacios en blanco

    generarMatrizUsuario(espaciosEnBlanco);
    const tablero = document.querySelector("#tablero");

    matrizUsuario.forEach((fila, i) => {

        const tr = document.createElement("tr");

        fila.forEach((valor, j) => {

            const td = document.createElement("td");

            if (valor !== "") {
                // Casilla fija
                td.textContent = valor;
                td.classList.add("fija");
            } else {
                // Casilla editable
                const textarea = document.createElement("textarea");
                textarea.id="Numero "+i+" "+j;
                textarea.rows = 1;
                textarea.cols = 1;
                textarea.maxLength = 1;   // solo 1 número
                textarea.dataset.fila = i;
                textarea.dataset.col = j;
                // Listener para solo permitir números
                textarea.addEventListener("input", () => {
                    textarea.value = textarea.value.replace(/[^1-4]/g, "");
                });

                td.appendChild(textarea);
            }

            tr.appendChild(td);
        });

        tablero.appendChild(tr);
    });

}
