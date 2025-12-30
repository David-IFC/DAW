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

let luchadores = [Ryu, Akuma, Ken];

let posicion = 0;

function CambiarImagen(boton) {

    if (posicion == 0 && boton == 1) {
        posicion = 3;
        document.getElementById("valor").innerHTML = posicion;
        
    } else if (posicion == luchadores.length - 1 && boton == 2) {
        posicion = 0;
        document.getElementById("valor").innerHTML = posicion;
    }else{

        if (boton == 1) {
            posicion = posicion - 1;
            document.getElementById("valor").innerHTML = posicion;
            document.getElementById("luchador").src = luchadores[posicion];
        }
        else if (boton == 2) {
            posicion = posicion + 1;
            document.getElementById("valor").innerHTML = posicion;
            document.getElementById("luchador").src = luchadores[posicion];
        }
    }

}










