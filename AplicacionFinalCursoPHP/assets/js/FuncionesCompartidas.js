/**genera las particulas que se ven por pantalla */
function generaParticulas() {
    // numero de particulas en pantalla 
    const numParticles = 80;
    //obtenemos el body para modificarlo 
    const body = document.body;
    //efecto particulas
    for (let i = 0; i < numParticles; i++) {

        const p = document.createElement("div");
        p.classList.add("neon-particle");

        // posicion horizontal aleatoria
        p.style.left = Math.random() * 100 + "vw";

        // posicion vertical aleatoria (para que ya aparezcan en pantalla)
        p.style.top = Math.random() * 100 + "vh";

        // tamaño aleatorio
        const size = Math.random() * 4 + 2;
        p.style.width = size + "px";
        p.style.height = size + "px";

        // duracion de la animacion aleatoria
        const duration = Math.random() * 15 + 5;
        p.style.animationDuration = duration + "s";

        body.appendChild(p);
    }
}

//llamo a la funcion desde aqui para que todas las paginas lo tengan
generaParticulas();
/**oculta la div de clase divTiempo  */
function ocultarDivTiempo() {
    const divTiempo = document.querySelector(".divTiempo");

    divTiempo.style.display = "none";
}

/**oculta la div de clase divTiempo con una transicion */
function ocultarDivTiempo2() {

    const divTiempo = document.querySelector(".divTiempo");

    divTiempo.classList.add("ocultar");

    // Eliminar del DOM después de que termine la transición
    divTiempo.addEventListener("transitionend", () => {
        divTiempo.remove();
    }, { once: true });
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

/**para que la flecha hacia atras funcione dado que al hacer fade-out se inhabilita*/
window.addEventListener("pageshow", () => {
    document.body.classList.remove("fade-out");
});

/**recarga la pagina para poder volver a intentarlo
 */

function reload() {
    window.location.href = window.location.pathname;
}

/**transforma el boton empezar en un textarea */
function transform() {

    const boton = document.querySelector(".botonEmpezarTiempo-TiempoTexto");
    const textarea = document.querySelector(".textoUsuario-TiempoTexto");

    boton.addEventListener("click", () => {
        boton.style.display = "none";
        textarea.classList.add("activo");
    });
}