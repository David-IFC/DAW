

let tiempoLimite = 5;
document.querySelector(".numeroTiempo").innerHTML = tiempoLimite;
/**es el tiempo que tiene el usuario para realizar la accion */
let tiempoTextoUsuario = tiempoLimite;
/**se usa para detener setInterval */
let pararTiempo;
let puntuacion = 0;
let erroresTexto = 0;

/** este vector contiene las palabras seleccionadas por el usuario  */
let palabrasSeleccionadas = [];


//Se activa cuando el usuario pulsa el boton para empezar a escribir
function empezar() {


    //aumentamos el tamaño del tiempo cuando se inicia el temporizador
    const textoTiempo = document.querySelector(".tiempo");
    textoTiempo.style.fontSize = "30px";
    //mostramos la lista de palabras que inicialmente estaba oculta
    document.querySelector(".palabrasLetrasAContrar").style.display = "flex";

    //deshabilitamos el boton para que no se pueda volver a iniciar la secuencia de escritura
    const boton = document.querySelector(".botonEmpezar");
    boton.disabled = true;

    tiempoTextoUsuario = tiempoLimite;

    document.querySelector(".tiempo").innerHTML = "Tiempo: " + tiempoTextoUsuario + "s";

    //guardamos el PID del proceso que se crea al ejecutar setInterval para poder pararlo mas
    //adelante
    pararTiempo = setInterval(() => {

        tiempoTextoUsuario = tiempoTextoUsuario - 1;

        document.querySelector(".tiempo").innerHTML = "Tiempo: " + tiempoTextoUsuario + "s";
        //Se acaba el temporizador
        if (tiempoTextoUsuario == -1) {

            clearInterval(pararTiempo);



            document.querySelector(".tiempo").innerHTML = "Tiempo Finalizado";


            /*  document.querySelector(".Comprobacion").innerHTML += "Puntuacion : " +
                 puntuacion + "<br>";
             document.querySelector(".Comprobacion").innerHTML += "Errores : " +
                 erroresTexto + "<br>"; */



        }
    }, 1000);



}
/**se activa al seleccionar una palabra y se llama con el id de la palabra que has pulsado
 * selecciona la palabra modificando el css para que el usuario vea que ha sido seleccionada
 */
function seleccionDePalabra(idPalabra) {

    if (palabrasSeleccionadas.length == 0) {

        palabrasSeleccionadas[0] = document.querySelector('#'+"Palabra"+idPalabra).innerHTML;
        document.querySelector(".textoDePrueba").innerHTML = "primera palabra seleccionada : " + palabrasSeleccionadas[0];

    } else if (palabrasSeleccionadas.length > 0) {

        if (palabrasSeleccionadas[0] == idPalabra) {

            palabrasSeleccionadas = [];
            document.querySelector(".textoDePrueba").innerHTML = "Has deseleccionado el primer elemento";

        } else {

            document.querySelector(".textoDePrueba").innerHTML = "primera palabra seleccionada con el id: " + palabrasSeleccionadas[0];
            document.querySelector(".textoDePrueba").innerHTML += "<br>" + "el segundo elemento seleccionado es: " + idPalabra;
            palabrasSeleccionadas[1] = idPalabra;
            if (palabrasSeleccionadas[0].length == palabrasSeleccionadas[1].length) {
                document.querySelector(".textoDePrueba").innerHTML ="La palabra: "+palabrasSeleccionadas[0]+" y la palabra:"+
                palabrasSeleccionadas[1]+" tienen el mismo numero de letras que es: "+palabrasSeleccionadas[0].length ;

            }
        }


    }


}
















