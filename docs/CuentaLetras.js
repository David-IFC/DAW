

const tiempoLimite = 15;
document.querySelector(".numeroTiempo").innerHTML = tiempoLimite;
/**es el tiempo que tiene el usuario para realizar la accion */
let tiempoTextoUsuario = tiempoLimite;
/**se usa para detener setInterval */
let pararTiempo;
let aciertos = 0;
let errores = 0;
/** para poder eliminar las 2 palabras necesito almacenar aparte de la palabra su id para acceder a la 
 * etiqueta correspondiente en el html.
 */
let IDpalabra = "";
/** este vector contiene las palabras seleccionadas por el usuario  */
let palabrasSeleccionadas = [];
/**Numero de palabras que el usuario dispondra para hacer parejas */
const numeroPalabras = 10;
/** vector que contendra las palabras que han pasado el filtro de seleccion */
let palabrasElegidas = [];
//estas 2 variables se usan para rellenar el vector de palabrasElegidas
let palabra1 = "";
let palabra2 = "";
/**indica el numero minimo de espacios que ocuparan las parejas -1 dado que empieza en 0*/
const minParejas = 5;
/**si una palabra seleccionada se encuentra en el vector se tiene que cambiar por otra */
let controlRepetida = false;
/** vector con las todas las palabras que pueden formar parte de la lista de palabras que el usuario tendra para seleccionar */
const palabras = [
    // ───── 40 parejas de anagramas (80 palabras) ─────

    // 3–4 letras
    "amor", "roma",
    "sal", "las",
    "cosa", "saco",
    "lima", "mila",
    "mora", "coma",
    "peso", "sopa",
    "cera", "acre",
    "tela", "lata",

    // 4–5 letras
    "ruta", "casa",
    "nota", "tina",
    "velo", "sapo",
    "pila", "lipa",
    "nido", "odin",
    "cita", "vino",
    "seda", "café",
    "risa", "asir",

    // 5 letras
    "prisa", "fuego",
    "campo", "libro",
    "perla", "mesa",
    "trapo", "porta",
    "claro", "coral",
    "marca", "carta",

    // 6 letras
    "camino", "monica",
    "sarten", "entras",
    "lienzo", "solete",
    "torneo", "correr",
    "cuadro", "lucero",

    // 7–8 letras
    "cartones", "camiones",
    "relacion", "ventanas",
    "esparto", "portado",


    // ───── 20 palabras sin pareja ─────
    "casa",
    "arbol",
    "libro",
    "ventana",
    "montana",
    "rio",
    "mariposa",
    "sol",
    "luna",
    "fuego",
    "tierra",
    "computadora",
    "teclado",
    "pantalla",
    "mesa",
    "silla",
    "reloj",
    "camion",
    "ciudad",
    "bosque",
    "esternocleidomastoideo",
    "supercalifragilisticoespialidoso"
];


/**Se activa cuando el usuario pulsa el boton para empezar a escribir */
function empezar() {

    //aumentamos el tamaño del tiempo cuando se inicia el temporizador
    const textoTiempo = document.querySelector(".tiempo");
    textoTiempo.style.fontSize = "30px";

    //rellenamos el vector de palabrasElegidas con parejas de palabras
    for (let index = 0; index < minParejas; index = index + 2) {
        //primero seleccionamos 2 palabras que tengan el mismo numero de letras
        //con este bucle me aseguro de que no sean la misma palabra
        while (palabra1 == palabra2 || palabra1.length != palabra2.length || controlRepetida) {
            //la ponemos a falso dado que si hay alguna palabra repetida lo comprobamos mas adelante
            controlRepetida = false;
            //elegimos la primera palabra de entre todas las del vector
            palabra1 = palabras[Math.floor(Math.random() * palabras.length)];
            //ahora seleccionamos la segunda palabra
            palabra2 = palabras[Math.floor(Math.random() * palabras.length)];
            //si el vector ya tiene algun elemento hay que comprobar que las palabras no esten dentro
            if (palabrasElegidas.length != 0) {
                //recorremos el vector para comprobar si las palabras seleccionadas estan dentro
                for (let indice = 0; indice < palabrasElegidas.length; indice++) {

                    if (palabrasElegidas[indice] == palabra1 || palabrasElegidas[indice] == palabra2) {
                        //en caso de que una o las dos palabras esten dentro del vector, repetimos el bucle
                        controlRepetida = true;
                    }
                }
            }
        }

        //rellenamos las posiciones del vector palabrasElegidas

        palabrasElegidas[index] = palabra1;
        palabrasElegidas[index + 1] = palabra2;
        //reseteamos las varibles delas palabras
        palabra1 = "";
        palabra2 = "";
    }
    //rellenamos el resto del vector con palabras aleatorias pero que no esten en el vector
    //ya no tienen por que ser parejas

    for (let index = minParejas + 1; index < numeroPalabras; index++) {
        //nos aseguramos que siempre entra la primera vez
        controlRepetida = true;
        while (controlRepetida) {
            //la ponemos a falso dado que si hay alguna palabra repetida lo comprobamos mas adelante
            controlRepetida = false;
            //elegimos la primera palabra de entre todas las del vector
            palabra1 = palabras[Math.floor(Math.random() * palabras.length)];

            //recorremos el vector para comprobar si las palabras seleccionadas estan dentro
            for (let indice = 0; indice < palabrasElegidas.length; indice++) {

                if (palabrasElegidas[indice] == palabra1) {
                    //en caso de que una o las dos palabras esten dentro del vector, repetimos el bucle
                    controlRepetida = true;
                }
            }

        }
        palabrasElegidas[index] = palabra1;
        palabra1 = "";

    }
    //mezclamos el vector 
    palabrasElegidas = mezclarSinMismaPosicion(palabrasElegidas);

    //rellenamos la lista de palabras
    for (let index = 0; index < palabrasElegidas.length; index++) {

        document.querySelector(".palabrasLetrasAContrar").innerHTML += '<li id="Palabra' + index 
        + '" onclick="seleccionDePalabra(' + index + ')">' + palabrasElegidas[index] + '</li>';

    }
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
            //ocultamos la lista de palabras que inicialmente estaba oculta
            
            document.querySelector(".palabrasLetrasAContrar").style.display = "none";
            document.querySelector(".textoDePrueba").style.display = "none";
        }
    }, 1000);



}
/**se activa al seleccionar una palabra y se llama con el id de la palabra que has pulsado
 * selecciona la palabra modificando el css para que el usuario vea que ha sido seleccionada
 */
function seleccionDePalabra(idPalabra) {

    //El vector no tiene elementos
    if (palabrasSeleccionadas.length == 0) {

        palabrasSeleccionadas[0] = document.querySelector('#' + "Palabra" + idPalabra).innerHTML;
        document.querySelector(".textoDePrueba").innerHTML = "primera palabra seleccionada : " + palabrasSeleccionadas[0];
        document.querySelector(".textoDePrueba").style.color = "black";
        IDpalabra = idPalabra;
        //El vector contiene elementos
    } else if (palabrasSeleccionadas.length > 0) {
        //se comprueba si has seleccionado el primer elemento por segunda vez
        if (palabrasSeleccionadas[0] == document.querySelector('#' + "Palabra" + idPalabra).innerHTML) {
            IDpalabra = "";
            palabrasSeleccionadas = [];
            document.querySelector(".textoDePrueba").innerHTML = "Has deseleccionado el primer elemento";
            document.querySelector(".textoDePrueba").style.color = "black";

            //añadimos el segundo elemento al vector
        } else {

            document.querySelector(".textoDePrueba").innerHTML = "primera palabra seleccionada con el id: " + palabrasSeleccionadas[0];
            document.querySelector(".textoDePrueba").innerHTML += "<br>" + "el segundo elemento seleccionado es: " + document.querySelector('#' + "Palabra" + idPalabra).innerHTML;
            palabrasSeleccionadas[1] = document.querySelector('#' + "Palabra" + idPalabra).innerHTML;
            //si tienen las mismas letras
            if (palabrasSeleccionadas[0].length == palabrasSeleccionadas[1].length) {

                document.querySelector(".textoDePrueba").innerHTML = "La palabra " + palabrasSeleccionadas[0] + " y la palabra " +
                    palabrasSeleccionadas[1] + " tienen el mismo numero de letras que es: " + palabrasSeleccionadas[0].length;
                //eliminamos los elementos de la lista
                document.querySelector('#' + "Palabra" + idPalabra).style.display = "none";
                document.querySelector('#' + "Palabra" + IDpalabra).style.display = "none";

                //añadimos  la pareja de palabras a la lista de palabras acertadas
                document.querySelector(".tablaPalabrasAcertadas").innerHTML += "<li>" + palabrasSeleccionadas[0] + " -- " + palabrasSeleccionadas[1];
                palabrasSeleccionadas = [];
                IDpalabra = "";
                aciertos++;
                document.querySelector(".numeroAciertos").innerHTML = aciertos;
                document.querySelector(".numeroPuntuacion").innerHTML = aciertos - errores;
                document.querySelector(".textoDePrueba").style.color = "blue";


                //si no tienen las mismas letras
            } else {
                document.querySelector(".textoDePrueba").innerHTML = "La palabra " + palabrasSeleccionadas[0] +
                    " tiene " + palabrasSeleccionadas[0].length + " letras " + "y" + " la palabra " + palabrasSeleccionadas[1] +
                    " tiene " + palabrasSeleccionadas[1].length + " letras";
                palabrasSeleccionadas = [];
                IDpalabra = "";
                errores++;
                document.querySelector(".numeroErrores").innerHTML = errores;
                document.querySelector(".numeroPuntuacion").innerHTML = aciertos - errores;
                document.querySelector(".textoDePrueba").style.color = "red";


            }
        }


    }


}

function mezclarSinMismaPosicion(arr) {
    
    let resultado;
    let valido = false;

    while (!valido) {

        resultado = [...arr].sort(() => Math.random() - 0.5);
        valido = resultado.every((el, i) => el !== arr[i]);
    }

    return resultado;
}

















