
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









