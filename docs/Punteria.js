const tiempoLimite = 10;
document.querySelector(".numeroTiempo-TiempoTexto").innerHTML = tiempoLimite;
/**es el tiempo que tiene el usuario para realizar la accion */
let tiempoTextoUsuario = tiempoLimite;
/**se usa para detener setInterval */
let pararTiempo;
let aciertos = 0;
let errores = 0;
/**decididira que paneles se ponen a verde */
let panelVerde = 0;
/**sirve para almacenar  el color de la casilla en cuestion  */
let colorFondo;
function cambiarFondo() {
    const celdas = document.querySelectorAll("td");
    for (let index = 0; index < celdas.length; index++) {

        celdas[index].addEventListener("click", () => {
            if (document.getElementById(index).style.backgroundColor == "green") {
                celdas[index].style.backgroundColor = "red";
                aciertos++;
            }

        });

    }
}


/**se encarga de iniciar el temporizador asi como de  editar los elementos
 * que se ven afectados por el temporizador
 */
function gestionTemporal() {
    //añadimos los liseners a las casillas
    cambiarFondo();
    document.querySelector(".matrizColores").disabled = true;
    pararTiempo = setInterval(() => {

        tiempoTextoUsuario = tiempoTextoUsuario - 1;

        document.querySelector(".tiempo").innerHTML = "Tiempo: " + tiempoTextoUsuario + "s";
        if (tiempoTextoUsuario > 0) {
            //obtenemos el id de forma aleatoria
            panelVerde = Math.floor(Math.random() * 100);
            colorFondo = document.getElementById(panelVerde).style.backgroundColor;
            //comprobamos que la celda no este ya pintada de verde;
            while (colorFondo == "green") {

                panelVerde = Math.floor(Math.random() * 100);
                colorFondo = document.getElementById(panelVerde).style.backgroundColor;
            }
            document.getElementById(panelVerde).style.background = "green";
            //aumentamos la aparicion de puntos verdes
            if (tiempoTextoUsuario <= tiempoLimite / 2) {
                //obtenemos el id de forma aleatoria
                panelVerde = Math.floor(Math.random() * 100);
                colorFondo = document.getElementById(panelVerde).style.backgroundColor;
                //comprobamos que la celda no este ya pintada de verde;
                while (colorFondo == "green") {

                    panelVerde = Math.floor(Math.random() * 100);
                    colorFondo = document.getElementById(panelVerde).style.backgroundColor;
                }
                document.getElementById(panelVerde).style.background = "green";
                //aumentamos la aparicion de puntos verdes
            }
        }
        //Se acaba el temporizador
        if (tiempoTextoUsuario == -1) {

            clearInterval(pararTiempo);
            //deshabilitamos los eventos de las celdas
            const celdas = document.querySelectorAll("td");
            for (let index = 0; index < celdas.length; index++) {
                celdas[index].style.pointerEvents = "none";
            }
            //por cada casilla en color verde es un error
            for (let index = 0; index < celdas.length; index++) {
                if (document.getElementById(index).style.backgroundColor == "green") {
                    errores++;
                }
            }
            document.querySelector(".tiempo").innerHTML = "Tiempo Finalizado";
            document.querySelector(".Resultados").innerHTML = "Aciertos: " + aciertos +
                "<br>" + "Errores: " + errores + "<br>" + "Puntuacion: " + (aciertos - errores);

        }
    }, 1000);
}


