<? include "assets/phpComponentes/datos.php"; ?>
<? $titulo = "TiempoTexto";
$clase = "TiempoTexto";
$java = "TiempoTexto.js"; ?>

<? include "assets/phpComponentes/BeforeMain.php" ?>


<main>
    <div class="contenedorPrincipal">
        <p class="instruccion"> Escribe el texto que hay
            debajo antes de que se acabe el tiempo: </p>


        <div class="divTexto">

            <p class="texto">Con rapidez has de escribir mas no dudar en las teclas a pulsar</p>

        </div>
        <div class="divTiempo">

            <img class="img" src="assets/img/relojArenaAzul.png" alt="">

            <p class="tiempo"><span class="numeroTiempo-TiempoTexto"></span><span class="letraS">s</span> </p>


        </div>

        <div class="textAreaBotones-TiempoTexto">

            <textarea readonly class="textoUsuario-TiempoTexto oculto"></textarea>

            <div class="botonesFila">
                <button class="botonEmpezarTiempo-TiempoTexto" onclick="empezarEscribirtexto()">Empezar</button>
            </div>
        </div>

        <br><br>
        <div class="resultadoTiempo oculto"></div>
        <div class="botonesFila">
            <button class="botonEmpezarTiempo-TiempoTexto reintentar oculto" onclick="reload()">Reintentar</button>
        </div>
    </div>
</main>
<? include "assets/phpComponentes/AfterMain.php"; ?>