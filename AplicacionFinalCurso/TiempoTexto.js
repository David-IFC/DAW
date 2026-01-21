
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
    //Habilitamos el textarea para poder escribir en el y cambiamos el fondo para que 
    //se lea mejor
    document.querySelector(".textoUsuario-TiempoTexto").style.backgroundColor = "white";
    document.querySelector(".textoUsuario-TiempoTexto").readOnly = false;

    //Actualizamos el tiempo 
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
            //activamos el boton de recargar
            boton2.style.pointerEvents = "auto";
            boton2.style.color = originalStyles.color;
            boton2.style.borderColor = originalStyles.borderColor;
            boton2.style.boxShadow = originalStyles.boxShadow;
            document.querySelector(".tiempo").innerHTML = "Tiempo Finalizado";

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
            document.querySelector(".Comprobacion").innerHTML += "Puntuacion : " +
                puntuacion + "<br>";
            document.querySelector(".Comprobacion").innerHTML += "Errores : " +
                erroresTexto + "<br>";

            textarea.readOnly = true;
            //habilitamos el boton recargar para que el usuario pueda reinicar el proceso
            
        }
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














