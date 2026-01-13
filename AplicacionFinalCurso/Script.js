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



/* 
let Ryu = "assets/img/Ryu.jpg";
let Ken = "assets/img/Ken.png";
let Akuma = "assets/img/Akuma.png";

let luchadores = [Akuma, Ryu, Ken];

let posicion = 0;

//cambia de imagen en funcion del boton que pulses
function CambiarImagen(boton) {

    //Primera posicion flecha iquierda
    if (posicion == 0 && boton == 1) {

        posicion = (luchadores.length - 1);

        document.getElementById("luchador").src = luchadores[posicion];


        document.querySelector(".NombreLuchador").innerHTML = "Ken";



        //ultima posicion flecha derecha
    } else if (posicion == (luchadores.length - 1) && boton == 2) {

        posicion = 0;

        document.querySelector(".NombreLuchador").innerHTML = "Akuma";

        document.getElementById("luchador").src = luchadores[posicion];

    } else {

        if (boton == 1) {
            if (posicion == 2) {

                document.querySelector(".NombreLuchador").innerHTML = "Ryu";

            } else {
                document.querySelector(".NombreLuchador").innerHTML = "Akuma";

            }
            posicion = posicion - 1;

            document.getElementById("luchador").src = luchadores[posicion];
        }
        else {
           
            if (posicion == 0) {
                document.querySelector(".NombreLuchador").innerHTML = "Ryu";

            } else {
                document.querySelector(".NombreLuchador").innerHTML = "Ken";

            }
            posicion = posicion + 1;

            document.getElementById("luchador").src = luchadores[posicion];
        }
    }

}
//obtiene el texto del textarea y cambia la imagen en funcion del texto
function CambiarImagenTexto() {

    let nombre = document.getElementById("nombreluchador").value;

    nombre = nombre.toLowerCase();


    if (nombre.includes("akuma")) {
        document.getElementById("luchador").src = luchadores[0];
    } else if (nombre.includes("ryu")) {
        document.getElementById("luchador").src = luchadores[1];
    } else if (nombre.includes("ken")) {
        document.getElementById("luchador").src = luchadores[2];
    } else {
        alert("Ese luchador no esta disponible. Ryu,Akuma,Ken");
    }



}

//segundos
let segundos = 0;
let contador = 0;
let minutos = 0;

function segundostranscurridos() {

    segundos = segundos + 1;
    contador = contador + 1;

    if (contador < 60) {
        document.getElementById("tiempo").innerHTML = segundos + " s";

    } else {
        if (segundos == 60) {
            minutos = minutos + 1;
            segundos = 0;
            document.getElementById("tiempo").innerHTML = minutos + " m " + segundos + " s";

        } else {
            document.getElementById("tiempo").innerHTML = minutos + " m " + segundos + " s";

        }

    }
}

 */

let tiempoLimite = 5;
let tiempoTextoUsuario = tiempoLimite;
let pararTiempo;
let texto = document.querySelector(".texto").textContent;
let puntuacion=0;
let erroresTexto=0;


//Se activa cuando el usuario pulsa el boton para empezar a escribir
function empezarEscribirtexto() {

    //cambiamos el foco para que sea ponerse a escribir directamente

    const input = document.querySelector(".textoUsuario");
    input.disabled=false;
    input.focus(); 


    const boton = document.querySelector(".botonEmpezarTiempo");
    boton.disabled = true;
    document.querySelector(".textoUsuario").style.backgroundColor = "white";
    document.querySelector(".textoUsuario").readOnly = false;
    clearInterval(pararTiempo);

    tiempoTextoUsuario = tiempoLimite;

    document.querySelector(".tiempo").innerHTML = tiempoTextoUsuario + "s";

    pararTiempo = setInterval(() => {

        tiempoTextoUsuario = tiempoTextoUsuario - 1;

        document.querySelector(".tiempo").innerHTML = tiempoTextoUsuario + "s";
        //Se acaba el temporizador
        if (tiempoTextoUsuario == -1) {

            clearInterval(pararTiempo);

            tiempoTextoUsuario = tiempoLimite;

            document.querySelector(".tiempo").innerHTML = "Tiempo Finalizado";

            const vectorTexto = texto.split(" ");

            const textarea = document.querySelector(".textoUsuario");

            const textoTextArea = document.querySelector(".textoUsuario").value;

            const vectortextoTextArea = textoTextArea.split(" ");

            //Proceso de comprobacion
            for (let index = 0; index < vectorTexto.length; index++) {
                
                if(vectorTexto[index]==vectortextoTextArea[index]){
                    puntuacion++;
                }else{
                    erroresTexto ++;
                }
                
            }
            document.querySelector(".Comprobacion").innerHTML += "Puntuacion : "+
            puntuacion+"<br>";
            document.querySelector(".Comprobacion").innerHTML += "Errores : "+
            erroresTexto+"<br>";

            textarea.readOnly = true;

        }
    }, 1000);



}
// por algun motivo si llamas a la funcion  no va tienes que insertarlo dentro de la anterior 
/* function iniciartemporizador() {

    tiempoTextoUsuario = tiempoTextoUsuario - 1;

    document.querySelector(".tiempo").innerHTML = tiempoTextoUsuario + "s";
    //El Tiempo finaliza
    if (tiempoTextoUsuario == 0) {

        clearInterval(pararTiempo);
        tiempoTextoUsuario = tiempoLimite;
        document.querySelector(".tiempo").innerHTML = "Tiempo Finalizado";
        

    }

} */















