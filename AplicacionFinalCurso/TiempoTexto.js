
//Para tener los segundos centralizados desde aqui se cambian los segundos que tiene el
//usuario para escribir el texto
let tiempoLimite = 7;
document.querySelector(".numeroTiempo-TiempoTexto").innerHTML = tiempoLimite;
let tiempoTextoUsuario = tiempoLimite;
//se usa para detener setInterval
let pararTiempo;
//el texto que el usuario ha de copiar
let texto = document.querySelector(".texto").textContent;
let puntuacion = 0;
let erroresTexto = 0;
// se usa para comprobar si el usuario ha pegado en el textarea
const textarea = document.querySelector(".textoUsuario-TiempoTexto");




//Se activa cuando el usuario pulsa el boton para empezar a escribir
function empezarEscribirtexto() {

    //aumentamos el tamaño del tiempo cuando se inicia el temporizador
    const textoTiempo = document.querySelector(".tiempo");
    textoTiempo.style.fontSize = "20px";

    //cambiamos el foco para que sea ponerse a escribir directamente
    const input = document.querySelector(".textoUsuario-TiempoTexto");
    input.disabled = false;
    input.focus();

    //deshabilitamos el boton para que no se pueda volver a iniciar la secuencia de escritura
    const boton = document.querySelector(".botonEmpezarTiempo-TiempoTexto");
    //modo deshabilitado
    boton.style.pointerEvents = "none";
    boton.style.color = "gray";
    boton.style.borderColor = "gray";
    boton.style.boxShadow = boton.style.boxShadow.replace(/rgba?\([^)]+\)/g, "gray");
    //Habilitamos el textarea para poder escribir en el y cambiamos el fondo para que 
    //se lea mejor

    document.querySelector(".textoUsuario-TiempoTexto").readOnly = false;

    //Actualizamos el tiempo 
    tiempoTextoUsuario = tiempoLimite;

    //guardamos el PID del proceso que se crea al ejecutar setInterval para poder pararlo mas
    //adelante
    pararTiempo = setInterval(() => {

        tiempoTextoUsuario = tiempoTextoUsuario - 1;

        //modificamos el texto con el tiempo cada segundo

        if (tiempoTextoUsuario >= 0) {
            document.querySelector(".numeroTiempo-TiempoTexto").innerHTML = tiempoTextoUsuario;
            return;
        }
        //Se acaba el temporizador
        clearInterval(pararTiempo);
        
        //quitamos el foco del textarea
        textarea.blur();
        //cambiamos el tamaño del div que contiene el texto
        const divTiempo = document.querySelector(".divTiempo");
        // Activamos animación de crecimiento
        divTiempo.classList.add("animar");

        setTimeout(() => {
            divTiempo.classList.remove("animar");
        }, 350);
        //cambiamos el texto del tiempo 
        const tiempoElemento = document.querySelector(".tiempo");
        // Animación de salida
        tiempoElemento.classList.add("cambio");

        setTimeout(() => {

            // Animación de entrada
            tiempoElemento.classList.remove("cambio");
        }, 300);
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
        //Actualizamos la tabla de resultados
        const resultado = document.querySelector(".resultadoTiempo");
        resultado.innerHTML =
            "Aciertos: " + puntuacion + " || " +
            "Errores: " + erroresTexto + " || " + "Puntuacion: " + (puntuacion - erroresTexto);
        //inhabilitamos la escritura
        textarea.readOnly = true;
        // Activamos transición

        resultado.classList.remove("oculto");
        resultado.classList.remove("mostrar");

        // forzamos el recalculado de estilos
        resultado.offsetHeight;

        resultado.classList.add("mostrar");

    }, 1000);



}
//recarga la pagina para poder volver a intentarlo
function reload() {
    transicion("TiempoTexto.html");
}
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














