//parte1
/* let nombre = 'Jack';
let apellido = 'Renó';
let year = 1948;
let city = 'Casablanca';

let miHTML = nombre +' '+ apellido +' ' + year +' ' + city+ '<br>'; 				// Paso1
miHTML +=  miHTML +  ' ' + nombre + ' ' + apellido + ' ' + year + ' ' + city+'<br>'; // Paso2
miHTML += nombre + ' ' + apellido + ' nació en ' + year + ' en ' + city+'<br>'; // Paso 3
miHTML += nombre + ' ' + apellido + ' nació en ' + year + ' en ' + city + ' y tiene ' + (2025 - year) + ' años.'+'<br>'; //Paso 4

document.body.innerHTML = miHTML; */
/////////////////////////////////////////////
/////////////////////////////////////////////
/* parte2 */

/* let luchador= "Akuma";
let imagen="assets/img/Akuma.png";

document.getElementById('titulo').innerHTML=luchador;

document.getElementById('cartel').src=imagen; */

/* parte 3
 */




let Ryu = "assets/img/Ryu.jpg";
let Ken = "assets/img/Ken.png";
let Akuma = "assets/img/Akuma.png";

let luchadores = [Akuma, Ryu, Ken];

let posicion = 0;

//cambia de imagen en funcion del boton que pulses
function CambiarImagen(boton) {


    if (posicion == 0 && boton == 1) {

        posicion = (luchadores.length - 1);

        document.getElementById("luchador").src = luchadores[posicion];

    } else if (posicion == (luchadores.length - 1) && boton == 2) {
        posicion = 0;

        document.getElementById("luchador").src = luchadores[posicion];

    } else {

        if (boton == 1) {
            posicion = posicion - 1;

            document.getElementById("luchador").src = luchadores[posicion];
        }
        else if (boton == 2) {
            posicion = posicion + 1;

            document.getElementById("luchador").src = luchadores[posicion];
        }
    }

}
//obtiene el texto del textarea y cambia la imagen en funcion del texto
function CambiarImagenTexto() {

    let nombre = document.getElementById("nombreluchador").value;



    if (nombre.includes("Akuma") || nombre.includes("akuma")) {
        document.getElementById("luchador").src = luchadores[0];
    } else if (nombre.includes("Ryu") || nombre.includes("ryu") ){
        document.getElementById("luchador").src = luchadores[1];
    } else if (nombre.includes("Ken") || nombre.includes("ken")) {
        document.getElementById("luchador").src = luchadores[2];
    } else {
        alert("Ese luchador no esta disponible. Ryu,Akuma,Ken");
    }

    //pantalla


}

//tiempo
let tiempo=0;
function segundostranscurridos() {
    tiempo= tiempo+1;
    document.getElementById("tiempo").innerHTML=tiempo;
}










