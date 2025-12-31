//Declaramos Variables
/* let repeticiones = prompt("inserta el numero de repeticiones");
let inicio = 1;
let incremento = 1; */


// Programación

//almacenar los datos que erá impresos
/* let miHTML = "";
document.querySelector("#numero").innerHTML=repeticiones; */
// bucle for
/* for (let i = inicio; i <= repeticiones; i += incremento) {
    miHTML += '<li>' + i + '</li>';
} */



// imprimir imformación
//document.body.innerHTML=miHTML;
//document.getElementById('lista').innerHTML=miHTML;
//document.querySelector('#lista').innerHTML = miHTML;


/* let nombre ="<strong>" +prompt("Introduce tu nombre")+"</strong>";

let mostrar = "Hola " + nombre + ", has sido seleccionado para formar " +
    "parte de un proyecto secreto, " + nombre + " eres vital para la supervivencia" +
    " del planeta. "+nombre +" responde rapido, te estamos esperando, eres nuestra ultima esperanza🎆.";

document.getElementById("texto").innerHTML = mostrar; */
/* 
let numero=5;
let mostrar= "<table> ";
for (let index = 0; index < 10; index++) {
    
    mostrar +="<tr> <td>"+ numero + " "+ " x"+ " "+index+ " "+"="+" "+numero*index +"</td></tr>";
    
}
mostrar +=" </table>";
document.body.innerHTML=mostrar; */

/* let subtitulos = [" No sé si puedo hacer todo esto, tío…",
    "Peter… escucha bien. Todos tenemos un don en la vida. Pero con ese poder viene una gran responsabilidad.",
    "¿Responsabilidad?",
    "Sí, hijo. No importa lo fuerte o inteligente que seas. Lo que hagas con tu poder define quién eres realmente.",
    "Lo entiendo, tío… intentaré hacer lo correcto.",
    "Recuerda siempre eso, Peter. Nunca lo olvides: un gran poder conlleva una gran responsabilidad."
];
let personajes=["Peter: ","Tio Ben: "];

let mostrar = "";

for (let index = 0; index < subtitulos.length; index++) {

    let personaje = personajes[0];

    if (index % 2 == 0) {

        personaje=personajes[1];
    }
    
    mostrar += "<li>" + "<strong>" + personaje + "</strong>" + subtitulos[index] + "</li>";
}

document.body.innerHTML = mostrar; */

let numeromeses = 12;
let dias = 30;
let mostrar = "<ul>";
const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

for (let index = 0; index < numeromeses; index++) {

    mostrar += "<li>" + "<strong>" + (meses[index]) + "</strong>" + "<br> <br>";
    
    for (let index2 = 0; index2 < dias; index2++) {

        mostrar += (index2 + 1) + "  ";
    }
    mostrar += "</li>";
}

mostrar += "</ul>";

document.body.innerHTML += mostrar;