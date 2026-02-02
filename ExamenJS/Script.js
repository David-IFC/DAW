

let datos = [["assets/img/Ryu.jpg", "assets/img/Ken.png", "assets/img/Akuma.png"],
["Ryu", "Ken", "Akuma"],
["La verdadera victoria proviene de la superación de uno mismo y el entrenamiento constante",
    "¿Lo veis? ¡Siempre gana el luchador más fuerte! Es así de sencillo",
    "¡Yo soy el poder hecho carne! ¡Siente cuán débil eres en verdad!,¡Messatsu!"],
["rgb(0, 102, 255)","yellow","red"]]

let posicion = 0;

//cambia de imagen en funcion del boton que pulses
function CambiarImagen(boton) {

    //primera posicion flecha derecha
    if (posicion == 0) {

        posicion = 1;
        document.querySelector(".izq").style.display = "inline";
        document.querySelector(".NombreLuchador").innerHTML = datos[1][posicion];
        document.getElementById("luchador").src = datos[0][posicion];
        document.getElementById("luchador").alt = datos[1][posicion];
        document.querySelector(".Frase").innerHTML = '"' + datos[2][posicion] + '"';
        document.querySelector(".fondo").style.backgroundColor=datos[3][posicion];

        //penultima posicion flecha derecha
    } else if (posicion == (datos[0].length - 2) && boton == 2) {
        document.querySelector(".dere").style.display = "none";
        posicion = datos[0].length - 1;
        document.querySelector(".NombreLuchador").innerHTML = datos[1][posicion];
        document.getElementById("luchador").src = datos[0][posicion];
        document.getElementById("luchador").alt = datos[1][posicion];
        document.querySelector(".Frase").innerHTML = '"' + datos[2][posicion] + '"';
        document.querySelector(".fondo").style.backgroundColor=datos[3][posicion];
        //segunda posicion flecha izquierda
    } else if (posicion == 1 && boton == 1) {
        posicion = 0;
        document.querySelector(".izq").style.display = "none";
        document.querySelector(".NombreLuchador").innerHTML = datos[1][posicion];
        document.getElementById("luchador").src = datos[0][posicion];
        document.getElementById("luchador").alt = datos[1][posicion];
        document.querySelector(".Frase").innerHTML = '"' + datos[2][posicion] + '"';
        document.querySelector(".fondo").style.backgroundColor=datos[3][posicion];
        //extremo derecho
    } else if (posicion = datos[0].length - 1) {
        posicion = datos[0].length - 2;
        document.querySelector(".dere").style.display = "inline";
        document.querySelector(".NombreLuchador").innerHTML = datos[1][posicion];
        document.getElementById("luchador").src = datos[0][posicion];
        document.getElementById("luchador").alt = datos[1][posicion];
        document.querySelector(".Frase").innerHTML = '"' + datos[2][posicion] + '"';
        document.querySelector(".fondo").style.backgroundColor=datos[3][posicion];
        //resto de posiciones boton derecho
    } else if (boton == 2) {
        posicion++;
        document.querySelector(".NombreLuchador").innerHTML = datos[1][posicion];
        document.getElementById("luchador").src = datos[0][posicion];
        document.getElementById("luchador").alt = datos[1][posicion];
        document.querySelector(".Frase").innerHTML = '"' + datos[2][posicion] + '"';
        document.querySelector(".fondo").style.backgroundColor=datos[3][posicion];
        //resto de posiciones boton izquierdo
    } else if (boton == 1) {
        posicion--;
        document.querySelector(".NombreLuchador").innerHTML = datos[1][posicion];
        document.getElementById("luchador").src = datos[0][posicion];
        document.getElementById("luchador").alt = datos[1][posicion];
        document.querySelector(".Frase").innerHTML = '"' + datos[2][posicion] + '"';
        document.querySelector(".fondo").style.backgroundColor=datos[3][posicion];
    }



}






















