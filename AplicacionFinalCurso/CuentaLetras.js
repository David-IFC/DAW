

const tiempoLimite = 2;
document.querySelector(".numeroTiempo-TiempoTexto").textContent = tiempoLimite;
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

    //para iniciar la cuenta atras en la lista de palabras
    let divPalabras = document.querySelector(".botonesFila");
    divPalabras.classList.add("transformado");
    let listaPalabras = document.querySelector(".palabrasLetrasAContrar");
    listaPalabras.classList.remove("oculto");
    //aumentamos el tamaño del tiempo cuando se inicia el temporizador
    let textoTiempoFont = document.querySelector(".tiempo");
    textoTiempoFont.style.fontSize = "20px";
    //espera antes de iniciar el ejercicio
    let segundos = 3;

    listaPalabras.innerHTML = `<li>Prepárate para contar en ${segundos}s</li>`;
    //iniciamos temporizador
    const cuentaAtras = setInterval(() => {
        segundos--;
        listaPalabras.innerHTML = `<li>Prepárate para contar en ${segundos}s</li>`;

        if (segundos === -1) {

            clearInterval(cuentaAtras);
            listaPalabras.innerHTML ="";
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

            //deshabilitamos el boton para que no se pueda volver a iniciar la secuencia de escritura
            const boton = document.querySelector(".botonEmpezarTiempo");
            //modo deshabilitado
            boton.style.pointerEvents = "none";
            boton.style.color = "gray";
            boton.style.borderColor = "gray";
            boton.style.boxShadow = boton.style.boxShadow.replace(/rgba?\([^)]+\)/g, "gray");
            //mirar tema reintentar 🧧🎑🎑🎑🎐🎐🎏🎏🎎🎎🎍🎍🎍🎋🎋🎄
            /*
            //deshabilitar recargar
            const boton2 = document.querySelector(".boton2");
            //guardo las variables para deshabilitar despues
            // Guardamos los estilos originales
            const originalStyles = {
                color: getComputedStyle(boton2).color,
                borderColor: getComputedStyle(boton2).borderColor,
                boxShadow: getComputedStyle(boton2).boxShadow
            };
            //modo deshabilitado
            boton2.style.pointerEvents = "none";
            boton2.style.color = "gray";
            boton2.style.borderColor = "gray";
            boton2.style.boxShadow = boton2.style.boxShadow.replace(/rgba?\([^)]+\)/g, "gray");
            */

            tiempoTextoUsuario = tiempoLimite;

            document.querySelector(".numeroTiempo-TiempoTexto").textContent = tiempoTextoUsuario;

            //cambiamos la imagen del temporizador
            const imagen = document.querySelector(".img");
            imagen.src = "assets/img/relojArena.png";
            //cambio el color del texto y el fondo del temporizador
            const textoTiempo = document.querySelector(".numeroTiempo-TiempoTexto");
            const letraS = document.querySelector(".letraS");
            textoTiempo.style.color = "black";
            letraS.style.color = "black";
            textoTiempo.style.fontWeight = "bold";
            letraS.style.fontWeight = "bold";
            textoTiempo.style.fontSize = "20px";
            letraS.style.fontSize = "20px";
            const fondoTemporizador = document.querySelector(".divTiempo");
            fondoTemporizador.style.background = "#00ffcc";
            //guardamos el PID del proceso que se crea al ejecutar setInterval para poder pararlo mas
            //adelante
            pararTiempo = setInterval(() => {

                tiempoTextoUsuario = tiempoTextoUsuario - 1;

                //modificamos el texto con el tiempo cada segundo

                if (tiempoTextoUsuario >= 0) {
                    document.querySelector(".numeroTiempo-TiempoTexto").textContent = tiempoTextoUsuario;
                    return;
                }

                //Se acaba el temporizador
                clearInterval(pararTiempo);
                //ocultamos el reloj
                ocultarDivTiempo();
                //activamos el boton de recargar
                boton2.style.pointerEvents = "auto";
                boton2.style.color = originalStyles.color;
                boton2.style.borderColor = originalStyles.borderColor;
                boton2.style.boxShadow = originalStyles.boxShadow;


                //ocultamos la lista de palabras que inicialmente estaba oculta

                document.querySelector(".palabrasLetrasAContrar").style.display = "none";
                document.querySelector(".textoInformativo").style.display = "none";

            }, 1000);
        }
    }, 1000)




}
/**se activa al seleccionar una palabra y se llama con el id de la palabra que has pulsado
 * selecciona la palabra modificando el css para que el usuario vea que ha sido seleccionada
 */
function seleccionDePalabra(idPalabra) {

    //El vector no tiene elementos
    if (palabrasSeleccionadas.length == 0) {

        palabrasSeleccionadas[0] = document.querySelector('#' + "Palabra" + idPalabra).innerHTML;
        document.querySelector(".textoInformativo").innerHTML = "primera palabra seleccionada : " + palabrasSeleccionadas[0];
        document.querySelector(".textoInformativo").style.color = "white";
        IDpalabra = idPalabra;
        //El vector contiene elementos
    } else if (palabrasSeleccionadas.length > 0) {
        //se comprueba si has seleccionado el primer elemento por segunda vez
        if (palabrasSeleccionadas[0] == document.querySelector('#' + "Palabra" + idPalabra).innerHTML) {
            IDpalabra = "";
            palabrasSeleccionadas = [];
            document.querySelector(".textoInformativo").innerHTML = "Has deseleccionado el primer elemento";
            document.querySelector(".textoInformativo").style.color = "white";

            //añadimos el segundo elemento al vector
        } else {

            document.querySelector(".textoInformativo").innerHTML = "primera palabra seleccionada con el id: " + palabrasSeleccionadas[0];
            document.querySelector(".textoInformativo").innerHTML += "<br>" + "el segundo elemento seleccionado es: " + document.querySelector('#' + "Palabra" + idPalabra).innerHTML;
            palabrasSeleccionadas[1] = document.querySelector('#' + "Palabra" + idPalabra).innerHTML;
            //si tienen las mismas letras
            if (palabrasSeleccionadas[0].length == palabrasSeleccionadas[1].length) {

                document.querySelector(".textoInformativo").innerHTML = "La palabra " + palabrasSeleccionadas[0] + " y la palabra " +
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
                document.querySelector(".textoInformativo").style.color = "green";


                //si no tienen las mismas letras
            } else {
                document.querySelector(".textoInformativo").innerHTML = "La palabra " + palabrasSeleccionadas[0] +
                    " tiene " + palabrasSeleccionadas[0].length + " letras " + "y" + " la palabra " + palabrasSeleccionadas[1] +
                    " tiene " + palabrasSeleccionadas[1].length + " letras";
                palabrasSeleccionadas = [];
                IDpalabra = "";
                errores++;
                document.querySelector(".numeroErrores").innerHTML = errores;
                document.querySelector(".numeroPuntuacion").innerHTML = aciertos - errores;
                document.querySelector(".textoInformativo").style.color = "red";


            }
        }


    }


}
/** mezclamos los elementos de un vector de manera que ninguno de ellos acabe en la misma posicion que ocupaba al
 * principio
 */
function mezclarSinMismaPosicion(arr) {

    let resultado;
    let valido = false;

    while (!valido) {

        resultado = [...arr].sort(() => Math.random() - 0.5);
        valido = resultado.every((el, i) => el !== arr[i]);
    }

    return resultado;
}
function reload() {
    transicion("CuentaLetras.html");
}
/** numero de particulas en pantalla */
const numParticles = 80;
/**obtenemos el body para modificarlo */
const body = document.body;
//efecto particulas
for (let i = 0; i < numParticles; i++) {

    const p = document.createElement("div");
    p.classList.add("neon-particle");

    // Posición horizontal aleatoria
    p.style.left = Math.random() * 100 + "vw";

    // Posición vertical aleatoria (para que ya aparezcan en pantalla)
    p.style.top = Math.random() * 100 + "vh";

    // Tamaño aleatorio
    const size = Math.random() * 4 + 2;
    p.style.width = size + "px";
    p.style.height = size + "px";

    // Duración de la animación aleatoria
    const duration = Math.random() * 15 + 5;
    p.style.animationDuration = duration + "s";

    body.appendChild(p);
}

/** aplica al body la animacion de fade-out */
function transicion(url) {

    // añadimos al css el fade-out
    document.body.classList.add('fade-out');

    // duracion
    setTimeout(() => {
        window.location.href = url;
    }, 600);

}
// para que la flecha hacia atras funcione
window.addEventListener("pageshow", () => {
    document.body.classList.remove("fade-out");
});

function ocultarDivTiempo() {
    const divTiempo = document.querySelector(".divTiempo");

    divTiempo.classList.add("ocultar");

    // Eliminar del DOM después de que termine la transición
    divTiempo.addEventListener("transitionend", () => {
        divTiempo.remove();
    }, { once: true });
}





















