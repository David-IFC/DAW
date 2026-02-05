<? include "assets/phpComponentes/datos.php"; ?>
<? $titulo = "Cuentaletras";
$clase = "cuentaletras"; 
$java = "CuentaLetras.js"; ?>

<? include "assets/phpComponentes//BeforeMain.php"; ?>

<main>
    <div class="contenedorPrincipal">
        <p class="instruccion">Selecciona parejas de palabras con el mismo numero de letras </p>

        <div class="divTiempo">

            <img class="img" src="assets/img/relojArenaAzul.png" alt="">

            <p class="tiempo"><span class="numeroTiempo-TiempoTexto"></span><span class="letraS">s</span> </p>


        </div>

        <div class="botonesFila">


            <button class="botonEmpezarTiempo" onclick="empezar()">Empezar</button>

        </div>
        <div class="divPalabrasAleatorias">
            <ul class="palabrasLetrasAContrar "> </ul>
        </div>



        <div class="textoInformativo instrucciones">Aqui aparecerá información interesante. <br></div>

        <div class="divResultados oculto">
            <div class="parejasAcertadas">
                <h2>Lista de parejas acertadas:</h2>

                <div class="tablaPalabrasAcertadas"></div><br>
            </div>
            <div class="puntuacion resultadoTiempo">
                <h2>Resultados</h2>

                <div class="tablaPuntuacion ">
                    Aciertos: <span class="numeroAciertos">0 </span> &nbsp;&nbsp;&nbsp;
                    Errores: <span class="numeroErrores">0</span> <br><br>
                    <span class="textoPuntuacion"> Puntuacion:</span> <span class="numeroPuntuacion">0</span>
                </div>
            </div>

        </div>
        <div class="botonesFila">
            <button class="botonEmpezarTiempo reintentar oculto" onclick="reload()">Reintentar</button>
        </div>
    </div>
</main>

<?include "assets/phpComponentes/AfterMain.php";?>