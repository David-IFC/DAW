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

/////////GESTION DE IDIOMAS
const details = document.querySelector('.idioma');
const summaryFlag = details.querySelector('summary .flag');
const summaryText = details.querySelector('summary span[data-key]');
const links = details.querySelectorAll('a');
// Por defecto, idioma activo: español
let idiomaActivo = 'es';
//actualizamos  la lista al cargar
actualizarListaIdiomas();
// Listener para cada enlace dentro del details
links.forEach(link => {
    link.addEventListener('click', async (e) => {
        e.preventDefault(); // Evitar recarga
        const lang = link.dataset.lang;
        // Cambiar idioma activo
        idiomaActivo = lang;
        // Cambiar la bandera del summary
        const clickedFlag = link.querySelector('img');
        summaryFlag.src = clickedFlag.src;
        summaryFlag.alt = clickedFlag.alt;

        // Cambiar el texto del summary
        summaryText.textContent = link.querySelector('span[data-key]').textContent;

        // Cerrar el details
        details.open = false;
        //actualizamos lista de idiomas
        actualizarListaIdiomas();
        // Cargar JSON correspondiente
        const response = await fetch(`assets/json/${lang}.json`);
        const texts = await response.json();

        // Cambiar todos los textos de la página que tengan data-key
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (texts[key]) {
                el.textContent = texts[key];
            }
        });
        //malditos franceses
        if (lang === "fr") {
            const textoGrande = document.querySelector('[data-key="cuentaLetras"]');
            ajustarTamano(textoGrande, 24, 12);
        }else {
            // Restaurar tamaño normal para otros idiomas
            const tituloGrande = document.querySelector('[data-key="cuentaLetras"]');
            if(tituloGrande) {
                tituloGrande.style.fontSize = "2rem";
            }
        }


        // Cambiar título del documento
        if (texts['titulo']) {
            document.title = texts['titulo'];
        }
    }); 
});

// Listener para clicks fuera del <details>
document.addEventListener('click', function (event) {
    if (!details.contains(event.target)) {
        details.open = false; // cerrar el details
    }
});
/** ajusta el tamaño del texto al contenedor */
function ajustarTamano(el, maxFontSize = 24, minFontSize = 12) {
    el.style.fontSize = maxFontSize + "px";
    while (el.scrollWidth > el.clientWidth && maxFontSize > minFontSize) {
        maxFontSize--;
        el.style.fontSize = maxFontSize + "px";
    }
}

/**elimina el idioma seleccionado de la lista de idiomas a seleccionar */
function actualizarListaIdiomas() {
    links.forEach(link => {
        const lang = link.dataset.lang;
        if(lang === idiomaActivo){
            link.style.display = 'none'; 
        } else {
            link.style.display = 'block'; 
        }
    });
}

