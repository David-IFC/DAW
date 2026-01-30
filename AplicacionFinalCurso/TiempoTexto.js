
//Para tener los segundos centralizados desde aqui se cambian los segundos que tiene el
//usuario para escribir el texto
const tiempoLimite = 8;
document.querySelector(".numeroTiempo-TiempoTexto").innerHTML = tiempoLimite;
let tiempoTextoUsuario = tiempoLimite;
//se usa para detener setInterval
let pararTiempo;
//el texto que el usuario ha de copiar
let texto = document.querySelector(".texto").textContent;
let puntuacion = 0;
let erroresTexto = 0;
// se usa para comprobar si el usuario ha pegado en el textarea
let textarea = document.querySelector(".textoUsuario-TiempoTexto");



//Se activa cuando el usuario pulsa el boton para empezar a escribir
function empezarEscribirtexto() {
    //bloqueamos eventos de teclado
    bloquearTeclado();
    //para iniciar la cuenta atras en el TA
    let contenedor = document.querySelector(".textAreaBotones-TiempoTexto");
    textarea = document.querySelector(".textoUsuario-TiempoTexto");

    contenedor.classList.add("transformado");

    textarea.classList.remove("oculto");
    textarea.readOnly = true;
    textarea.disabled = true;
    textarea.classList.add("bloqueado");

    let segundos = 3;

    textarea.value = `Prepárate para escribir en ${segundos}s`;

    const cuentaAtras = setInterval(() => {
        segundos--;
        textarea.value = `Prepárate para escribir en ${segundos}s`;

        if (segundos === -1) {
            //desbloquear teclado
            desbloquearTeclado();
            //cambiamos la imagen del temporizador
            const imagen = document.querySelector(".img");
            imagen.src = "assets/img/relojArena.png";

            //quitamos el parpadeo
            textarea = document.querySelector(".textoUsuario-TiempoTexto");
            textarea.style.animation = "none";
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
            clearInterval(cuentaAtras);
            textarea.style.fontSize = "15px";
            textarea.value = "";
            textarea.disabled = false;
            textarea.readOnly = false;
            textarea.classList.remove("bloqueado");

            textarea.focus();



            //guardamos el PID del proceso que se crea al ejecutar setInterval para poder pararlo mas
            //adelante
            pararTiempo = setInterval(() => {

                tiempoTextoUsuario = tiempoTextoUsuario - 1;



                if (tiempoTextoUsuario >= 0) {
                    document.querySelector(".numeroTiempo-TiempoTexto").innerHTML = tiempoTextoUsuario;
                    return;
                }
                //Se acaba el temporizador
                clearInterval(pararTiempo);

                //quitamos el foco del textarea
                textarea.blur();
                //transformamos la cadena de texto en un vector en el que cada
                //posicion es una palabra las cuales se obtienen de eliminar los espacios en
                // blanco
                const vectorTexto = texto.split(" ");

                const textoTextArea = document.querySelector(".textoUsuario-TiempoTexto").value;

                const vectortextoTextArea = textoTextArea.split(" ");

                //Proceso de comprobacion
                for (let index = 0; index < vectorTexto.length; index++) {

                    if (vectorTexto[index] == vectortextoTextArea[index]) {
                        puntuacion++;
                    } else {
                        erroresTexto++;
                    }

                }
                //Actualizamos la tabla de resultados y mostramos el boton reintentar
                const reintentar = document.querySelectorAll(".botonEmpezarTiempo-TiempoTexto")[1];
                const resultado = document.querySelector(".resultadoTiempo");
                resultado.innerHTML =
                    "Aciertos: " + puntuacion + " &nbsp;&nbsp;&nbsp;" +
                    "Errores: " + erroresTexto + "<br> <br>" + "<span class='puntuacion'> Puntuacion: " + (puntuacion - erroresTexto)
                    + "</span>";
                document.querySelector(".puntuacion").style.fontSize = "20px";
                // Obtener el grosor actual del borde
                let grosorActual = window.getComputedStyle(resultado).borderWidth;
                // Convertir a número
                let grosor = parseInt(grosorActual);
                // Aumentar el grosor
                grosor += 5;
                // Aplicar el nuevo borde
                resultado.style.borderWidth = grosor + "px";
                //inhabilitamos la escritura
                textarea.readOnly = true;
                // Activamos transición
                reintentar.classList.remove("oculto");
                reintentar.classList.remove("mostrar");
                resultado.classList.remove("oculto");
                resultado.classList.remove("mostrar");

                // forzamos el recalculado de estilos
                resultado.offsetHeight;
                reintentar.offsetHeight;
                resultado.classList.add("mostrar");
                reintentar.classList.add("mostrar");

                //animacion de salida y entrada de el boton y el textarea respectivamente
                const botonSalida = document.querySelector(".botonEmpezarTiempo-TiempoTexto");
                const textareaSalida = document.querySelector(".textoUsuario-TiempoTexto");
                contenedor = document.querySelector(".textAreaBotones-TiempoTexto");

                botonSalida.classList.add("oculto");
                contenedor.classList.add("transformado");

                textareaSalida.classList.remove("oculto");
                textareaSalida.readOnly = false;

                setTimeout(() => {

                }, 300);

                //aumentamos el tamaño del tiempo cuando se inicia el temporizador
                const textoTiempo = document.querySelector(".tiempo");
                textoTiempo.style.fontSize = "20px";

                //cambiamos el foco para que sea ponerse a escribir directamente
                const input = document.querySelector(".textoUsuario-TiempoTexto");
                input.disabled = false;


                //deshabilitamos el boton para que no se pueda volver a iniciar la secuencia de escritura
                const boton = document.querySelector(".botonEmpezarTiempo-TiempoTexto");
                //modo deshabilitado
                boton.style.display = "none";
                //Habilitamos el textarea para poder escribir en el y cambiamos el fondo para que 
                //se lea mejor

                textarea = document.querySelector(".textoUsuario-TiempoTexto");
                textarea.classList.remove("oculto");
                textarea.disabled = true;
                textarea.readOnly = true;
                textarea.style.color = "grey";

                // pequeño delay para que la animación se note
                setTimeout(() => {
                    textarea.focus();
                }, 200);
                //Ocultamos el tiempo

                ocultarDivTiempo();
                //quitamos el boxshadow de todos los elementos menos de la puntuacion
                const divTexto = document.querySelector(".divTexto");
                const botonReintentar = document.querySelector(".reintentar");
                botonReintentar.style.display="inline";
                divTexto.style.boxShadow = "none";
                textarea.style.boxShadow = "none";
                botonReintentar.style.boxShadow = "none";
                //Actualizamos el tiempo 
                tiempoTextoUsuario = tiempoLimite;

            }, 1000);

        }
    }, 1000);






}
//recarga la pagina para poder volver a intentarlo
function reload() {
    // Guardamos un flag
    sessionStorage.setItem("iniciarAlCargar", "true");

    // Recargamos la página
    transicion("TiempoTexto.html");
}

// Al cargar la página
window.addEventListener("load", () => {

    if (sessionStorage.getItem("iniciarAlCargar") === "true") {
        empezarEscribirtexto();

        // Limpiamos el flag para que no se repita en otra recarga
        sessionStorage.removeItem("iniciarAlCargar");
    }
});

//este evento se encarga de evitar que el usuario pege texto en el textarea y llama a la funcion
//contarPegar()
textarea.addEventListener("paste", (event) => {
    event.preventDefault();
    contarPegar();
});
function contarPegar() {

    //Supongamos que dentro de la base de datos hay una columna que se llama "Karma"
    //en el caso de que el usuario intente copiar el texto el karma desciende

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

/**transforma el boton empezar en un textarea */
function transform() {

    const boton = document.querySelector(".botonEmpezarTiempo-TiempoTexto");
    const textarea = document.querySelector(".textoUsuario-TiempoTexto");

    boton.addEventListener("click", () => {
        boton.style.display = "none";
        textarea.classList.add("activo");
    });
}

function ocultarDivTiempo() {
    const divTiempo = document.querySelector(".divTiempo");

    divTiempo.classList.add("ocultar");

    // Eliminar del DOM después de que termine la transición
    divTiempo.addEventListener("transitionend", () => {
        divTiempo.remove();
    }, { once: true });
}


function bloquearTeclado() {
    window.addEventListener("keydown", bloquearEvento);
    window.addEventListener("keypress", bloquearEvento);
    window.addEventListener("keyup", bloquearEvento);
}

function desbloquearTeclado() {
    window.removeEventListener("keydown", bloquearEvento);
    window.removeEventListener("keypress", bloquearEvento);
    window.removeEventListener("keyup", bloquearEvento);
}

function bloquearEvento(e) {
    e.preventDefault(); // evita acción por defecto
    e.stopPropagation(); // evita que otros listeners lo reciban
}













