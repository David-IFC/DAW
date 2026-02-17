
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

/** aplica la animacion de fade-out */
function transicion(url) {

    // añadimos al css el fade-out
    document.body.classList.add('fade-out');

    // duracion
    setTimeout(() => {
        window.location.href = url;
    }, 600);

}

function recargar(url) {
    
    window.location.href = url+"?lang="+sessionStorage.getItem('idioma');

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

///////// GESTIÓN DE IDIOMAS /////////

const details = document.querySelector('.idioma');
const summaryFlag = details.querySelector('summary .flag');
const summaryText = details.querySelector('summary span[data-key]');
const links = details.querySelectorAll('a');

var idiomaActivo;

if (!sessionStorage.getItem("idiomaInicializado")) {

    idiomaActivo = 'es';
    sessionStorage.setItem("idioma", "es");
    // Guardamos la marca
    sessionStorage.setItem("idiomaInicializado", "true");
    
} else {
    idiomaActivo = sessionStorage.getItem('idioma');
    
}

cargarIdioma(idiomaActivo);



//  actualizar lista de idiomas en el menú
function actualizarListaIdiomas() {
    links.forEach(link => {
        const lang = link.dataset.lang;
        link.style.display = (lang === idiomaActivo) ? 'none' : 'block';
    });
}



//  enlaces de idioma
links.forEach(link => {
    link.addEventListener('click', async (e) => {
        e.preventDefault();

        const lang = link.dataset.lang;

        // Actualizar idioma activo y guardar en sessionStorage
        idiomaActivo = lang;
        sessionStorage.setItem('idioma', lang);

        // Cargar el idioma seleccionado
        await cargarIdioma(lang);
    });
});

//  cerrar <details> al hacer click fuera
document.addEventListener('click', event => {
    if (!details.contains(event.target)) {
        details.open = false;
    }
});

async function cargarIdioma(lang) {
    const response = await fetch(`assets/json/${lang}.json`);
    const texts = await response.json();
    console.log(lang);
    // Actualizar bandera y texto del summary
    const idiomaMap = {
        es: { src: "https://flagcdn.com/32x24/es.png", alt: "España", textKey: "idioma" },
        en: { src: "https://flagcdn.com/32x24/us.png", alt: "Estados Unidos", textKey: "idioma" },

    };

    const map = idiomaMap[lang];
    if (map) {
        summaryFlag.src = map.src;
        summaryFlag.alt = map.alt;
        summaryText.textContent = texts[map.textKey] || '';
    }

    // Cambiar todos los textos de la página que tengan data-key
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (texts[key]) el.textContent = texts[key];
    });

    // Cambiar título del documento si existe
    if (texts['titulo']) document.title = texts['titulo'];

    // Actualizar lista de idiomas (ocultar el idioma activo)
    actualizarListaIdiomas();
}


