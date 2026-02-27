<?php

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

$nombreUsuario = $_SESSION['NombreUsuario'] ?? null;
echo $nombreUsuario;

?>

<?php include "assets/phpComponentes/datos.php"; ?>

<?php
$titulo = "IniciarSesion";
$clase = "IniciarSesion";
$java = "IniciarSesion.js";


?>

<?php include "assets/phpComponentes/BeforeMain.php"; ?>

<main>
    <div class="contenedorPrincipal">

        <h2>
            <?php echo $texto["IniciarSesion"]; ?>
        </h2>
        <form id="registro" action="assets/db/ProcesarIniciarSesion.php" method="post">
            <label for="username">
                <?php echo $texto["nombreDeUsuario"]; ?>
            </label><br>
            <input type="text" id="username" required name="username"><br><br>
            <label for="password">
                <?php echo $texto["contraseña"]; ?>
            </label><br>
            <input type="password" id="password" required name="password"><br><br>

            <button class="botonEmpezarTiempo-TiempoTexto" type="submit">
                <?php echo $texto["IniciarSesion"]; ?>
            </button>
        </form>

    </div>
</main>

<?php include "assets/phpComponentes/AfterMain.php"; ?>