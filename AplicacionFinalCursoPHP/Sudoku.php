<?php
$sessionPath = __DIR__ . '/tmp_sessions';
if (!is_dir($sessionPath)) {
    mkdir($sessionPath, 0777, true);
}
session_save_path($sessionPath);
session_start(); // Sesión en memoria

// Si se recibe un idioma por GET, actualizar la sesión
if (isset($_GET['lang']) && !empty($_GET['lang'])) {
    $_SESSION['lang'] = $_GET['lang'];
}

// Usar el idioma de la sesión o español por defecto
$lang = $_SESSION['lang'] ?? 'es';

// Cargar JSON según el idioma
$json_file = __DIR__ . "/assets/json/$lang.json";
$texto = json_decode(file_get_contents($json_file), true);
?>
<? include "assets/phpComponentes/datos.php"; ?>
<? $titulo = "Sudoku";
$clase = "Sudoku";
$java = "Sudoku.js";  ?>

<? include "assets/phpComponentes//BeforeMain.php"; ?>

<main>

    <div class="contenedorPrincipal">

        <div class="divTiempo">

            <img class="img" src="assets/img/relojArenaAzul.png" alt="">

            <p class="tiempo"><span class="numeroTiempo-TiempoTexto"></span><span class="letraS"> s</span> </p>


        </div>

        <table class="matriz" border="1">
            <tbody id="tablero"></tbody>
        </table>
        <div class="textAreaBotones-TiempoTexto"> <textarea readonly class="textoUsuario-TiempoTexto oculto"></textarea>
            <button class="botonEmpezarTiempo" onclick="generacionSudoku()"><?echo $texto["generarSudoku"];?></button>

        </div>

        <div class="resultadoTiempo oculto"></div>
        <button class="botonEmpezarTiempo reintentar oculto" onclick="recargar('Sudoku.php')"><?echo $texto["reintentar"];?></button>

    </div>
</main>

<? include "assets/phpComponentes/AfterMain.php";?>