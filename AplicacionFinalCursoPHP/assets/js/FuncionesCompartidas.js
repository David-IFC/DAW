function ocultarDivTiempo() {
    const divTiempo = document.querySelector(".divTiempo");

    divTiempo.style.display = "none";
}

function ocultarDivTiempo2() {

    const divTiempo = document.querySelector(".divTiempo");

    divTiempo.classList.add("ocultar");

    // Eliminar del DOM después de que termine la transición
    divTiempo.addEventListener("transitionend", () => {
        divTiempo.remove();
    }, { once: true });
}

function generaParticulas() {
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
}