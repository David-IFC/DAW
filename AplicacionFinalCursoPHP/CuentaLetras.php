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
<? $titulo = "Cuentaletras";
$clase = "cuentaletras"; 
$java = "CuentaLetras.js"; ?>

<? include "assets/phpComponentes//BeforeMain.php"; ?>

<main>
    <div class="contenedorPrincipal">
        <p class="instruccion"><?php echo $texto["instruccionCuentaLetras"]; ?> </p>

        <div class="divTiempo">

            <img class="img" src="assets/img/relojArenaAzul.png" alt="">

            <p class="tiempo"><span class="numeroTiempo-TiempoTexto"></span><span class="letraS">s</span> </p>


        </div>

        <div class="botonesFila">


            <button class="botonEmpezarTiempo" onclick="empezar()"><?php echo $texto["empezar"]; ?></button>

        </div>
        <div class="divPalabrasAleatorias">
            <ul class="palabrasLetrasAContrar "> </ul>
        </div>



        <div class="textoInformativo instrucciones"><?php echo $texto["informacionCuentaletras"]; ?> <br></div>

        <div class="divResultados oculto">
            <div class="parejasAcertadas">
                <h2><? echo $texto["listadeParejasAcertadas"];?></h2>

                <div class="tablaPalabrasAcertadas"></div><br>
            </div>
            <div class="puntuacion resultadoTiempo">
                <h2><? echo $texto["resultadosCuentaletras"];?></h2>

                <div class="tablaPuntuacion ">
                    <? echo $texto["aciertos"];?> <span class="numeroAciertos">0 </span> &nbsp;&nbsp;&nbsp;
                    <? echo $texto["errores"];?> <span class="numeroErrores">0</span> <br><br>
                    <span class="textoPuntuacion"> <?echo $texto["puntuacion"];?></span> <span class="numeroPuntuacion">0</span>
                </div>
            </div>

        </div>
        <div class="botonesFila">
            <button class="botonEmpezarTiempo reintentar oculto" onclick="recargar('CuentaLetras.php')"> <span data-key="reintentar"><?php echo $texto["reintentar"]; ?></span></button>
        </div>
    </div>
</main>

<?include "assets/phpComponentes/AfterMain.php";?>