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

/* let Ryu = "assets/img/Ryu.jpg";
let Ken = "assets/img/Ken.png";
let Akuma = "assets/img/Akuma.png";

let luchadores = [Ryu, Akuma, Ken];

let posicion=0;

function CambiarImagen(boton){

    if(boton=1){
        posicion =posicion -1;
        document.getElementById("luchador").src=luchadores[posicion];
    }
    else if(buton=2){
        posicion =posicion +1;
        document.getElementById("luchador").src=luchadores[posicion];
    }
    document.getElementById("valor").innerHTML=boton;
}

 */

//Variables
/* let ciudad="Gijón";
let provincia="Asturias";
let pais="España";

//concatenar variables
let Mostrar="Ciudad: "+ciudad+"<br>"+"Provincia: "+provincia+
"<br>"+"Pais: "+pais;


Mostrar += "<br>"+"Otro elemento más"; */

//Imprimir por pantalla
/* document.body.innerHTML= Mostrar ;
 */
/* 
for (let index = 0; index < 150; index++) {
    document.body.innerHTML += +(1 + index) + " ";

}


let array = ["Pedro", "Luis", "Juan", "Alberto", "Amadio"];
document.body.innerHTML += "<br> <br> <h1>" + " Lista de elementos:" + "</h1>";
for (let index = 0; index < array.length; index++) {
    document.body.innerHTML += "<br>" + array[index];

}

let arrayImagenes = ["https://images.alphacoders.com/129/thumb-1920-1293964.png",
    "https://images3.alphacoders.com/137/thumb-1920-1376001.jpg",
    "https://cdn.wallpapersafari.com/5/94/N9hEdP.jpg",
]
document.body.innerHTML += "<br> <br> <h1>" + " Lista de imagenes:" + "</h1>";
for (let index = 0; index < arrayImagenes.length; index++) {

    document.body.innerHTML += " <img  src=" + arrayImagenes[index] + " alt=''>" + "<br>";

}


document.body.innerHTML += "<br> <br> <h1>" + " Lista de imagenes con texto:" + "</h1>";
let textoImagenes = ["Como molan los space marines, estos parece que son albinos.",
    "Esto es una captura del juegos Space Marine 2, el primero se llama Titus el otro no se.",
    "Parece un guerrero del caos, un hereje pero podria ser un space marine tambien."];

for (let index = 0; index < arrayImagenes.length; index++) {

    document.body.innerHTML += " <img  src=" + arrayImagenes[index] + " alt=''>" +
        "<br>" + textoImagenes[index] + "<br> <br>";

}


let numeromax = 8
let repeticiones = 4
document.body.innerHTML += "<br> <br> <h1>" + " Bucles dentro de bucles" + "</h1>";

for (let index = 0; index < repeticiones; index++) {

    for (let i = 0; i < numeromax; i++) {

        document.body.innerHTML += (i + 1);
    }
    document.body.innerHTML += "<br> <br>";
}

document.body.innerHTML += "<br> <br> <h1>" + " Asteriscos Magicofantásticos" + "</h1>";

document.body.innerHTML += "<br> <br> <h2>" + " Piramide" + "</h2>";


let numeroAsteriscosPiramide = 5;


for (let index = 0; index < numeroAsteriscosPiramide; index++) {

    for (let i = 0; i < index + 1; i++) {

        document.body.innerHTML += "*";
    }
    document.body.innerHTML += "<br>";
}

document.body.innerHTML += "<br> <br> <h2>" + " Arbol" + "</h2>";

let numeroAsteriscosArbol = 8;
let tronco = 3;

for (let index = 0; index < numeroAsteriscosArbol; index++) {



    if (index > (numeroAsteriscosArbol - tronco)) {
        for (let i = 0; i < (tronco - 1); i++) {
            document.body.innerHTML += "*" + " ";
        }

    } else {
        for (let i = 0; i < index + 1; i++) {
            document.body.innerHTML += "*";
        }
 */
/*   }

  document.body.innerHTML += "<br>";
}

document.body.innerHTML += "<br> <br> <h2>" + " Arbol de Navidad" + "</h2>";

for (let index = 0; index < numeroAsteriscosArbol; index++) {



  if (index > (numeroAsteriscosArbol - tronco)) {
      for (let i = 0; i < (tronco - 1); i++) {
          document.body.innerHTML += "*" + " ";
      }

  } else {

      for (let i = 0; i < index + 1; i++) { */


/*  if (i % 2 == 0) {

     document.body.innerHTML += '<div class="iluminado">' + "*" + '</div>';
 } else {

     document.body.innerHTML += "*";
 } */
/*        document.body.innerHTML += "*";
   }

}

document.body.innerHTML += "<br>";
}


document.body.innerHTML += "<br> <br> <h1>" + " Multiplicaciones" + "</h1>";
;
let numero = 2
let repeticionesMultiplicacion = 8;

for (let index = 0; index < repeticionesMultiplicacion; index++) {


document.body.innerHTML += "<br>" + numero + " x " + (index + 1) + " = " + numero * (index + 1);



}


document.body.innerHTML += "<br> <br> <h2>" + " MultiplicacionesV2" + "</h2>";


let numeros = 2;
let comienzo = -2;
let repeticionesMultiplicacionv2 = 8;

for (let index = comienzo; index < repeticionesMultiplicacionv2; index++) {


document.body.innerHTML += "<br>" + numeros + " x " + (index) + " = " + numeros * (index);



}

document.body.innerHTML += "<br> <br> <h2>" + " MultiplicacionesV3" + "</h2>";

let tabla_ini = 2
let tabla_fin = 5
let comienzotabla = 1
let repeticionestabla = 4

for (let index = tabla_ini; index < (tabla_fin + 1); index++) {

document.body.innerHTML += " <br> <h3>" + "Tabla del " + index + "</h3>";

for (let i = comienzotabla; i < (repeticionestabla + 1); i++) {

   document.body.innerHTML += "<br>" + index + " x " + (i) + " = " + index * (i);

}



} */

let misPelis = [
    ['Origen', 'C. Nolan', 2010, 'inception.jpg'],
    ['Jurasic Park', 'S. Spielberg', 1992, 'JPark.png'],
    ['Toy Story', 'J. Lasseter', 1995, 'toy_story.gif']
];


