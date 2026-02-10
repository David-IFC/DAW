<?php
$sessionPath = __DIR__ . '/tmp_sessions';


// Si se recibe un idioma por GET, actualizar la sesión
if (isset($_GET['lang'])) {
    $_SESSION['lang'] = $_GET['lang'];
}

// Usar el idioma de la sesión o español por defecto
$lang = $_SESSION['lang'] ?? 'es';
if (empty($lang)) {
    $lang = 'es';
}
// Cargar JSON según el idioma
$json_file = __DIR__ . "/assets/json/$lang.json";
$texto = json_decode(file_get_contents($json_file), true);
?>
<?php include "assets/phpComponentes/datos.php"; ?>
<?php
$titulo = "TiempoTexto";
$clase = "TiempoTexto";
$java = "TiempoTexto.js"; ?>

<?php include "assets/phpComponentes/BeforeMain.php" ?>


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
                <button class="botonEmpezarTiempo-TiempoTexto" onclick="empezarEscribirtexto()"><span
            data-key="empezar"><?php echo $texto["empezar"]; ?></span></button>
            </div>
        </div>

        <br><br>
        <div class="resultadoTiempo oculto"></div>
        <div class="botonesFila">
            <button class="botonEmpezarTiempo-TiempoTexto reintentar oculto" onclick="transicion('TiempoTexto.php?lang=<?php echo $lang; ?>')">Reintentar</button>
        </div>
    </div>
</main>
<?php include "assets/phpComponentes/AfterMain.php"; ?>