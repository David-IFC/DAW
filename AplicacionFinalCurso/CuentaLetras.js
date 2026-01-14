

let tiempoLimite = 5;
document.querySelector(".numeroTiempo").innerHTML = tiempoLimite;
let tiempoTextoUsuario = tiempoLimite;
//se usa para detener setInterval
let pararTiempo;
//el texto que contiene todas las palabras
let texto = document.querySelector(".texto").textContent;
let puntuacion=0;
let erroresTexto=0;


//Se activa cuando el usuario pulsa el boton para empezar a escribir
function empezar() {

    //cambiamos el foco para que sea ponerse a escribir directamente

    const input = document.querySelector(".textoUsuario");
    input.disabled=false;
    input.focus(); 

    //deshabilitamos el boton para que no se pueda volver a iniciar la secuencia de escritura
    const boton = document.querySelector(".botonEmpezarTiempo");
    boton.disabled = true;
    //Habilitamos el textarea para poder escribir en el y cambiamos el fondo para que 
    //se lea mejor
    document.querySelector(".textoUsuario").style.backgroundColor = "white";
    document.querySelector(".textoUsuario").readOnly = false;


    tiempoTextoUsuario = tiempoLimite;

    document.querySelector(".tiempo").innerHTML = tiempoTextoUsuario + "s";
    
    //guardamos el PID del proceso que se crea al ejecutar setInterval para poder pararlo mas
    //adelante
    pararTiempo = setInterval(() => {

        tiempoTextoUsuario = tiempoTextoUsuario - 1;

        document.querySelector(".tiempo").innerHTML = tiempoTextoUsuario + "s";
        //Se acaba el temporizador
        if (tiempoTextoUsuario == -1) {

            clearInterval(pararTiempo);

            

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
















