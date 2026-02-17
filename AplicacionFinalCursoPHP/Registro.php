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

<?php include "assets/phpComponentes/datos.php"; ?>

<?php
$titulo = "Registro";
$clase = "Registro";
$java = "Registro.js";
?>

<?php include "assets/phpComponentes/BeforeMain.php"; ?>

<main>
    <div class="contenedorPrincipal">
        <h2><?php echo $texto["resgistrar"];?></h2>
        <form id="registro" action="/procesar-login" method="post">
            <label for="username"><?php echo $texto["nombreDeUsuario"];?></label><br>
            <input type="text" id="username" name="username" required><br><br>

            <label for="password"><?php echo $texto["contraseña"];?></label><br>
            <input type="password" id="password" name="password" required><br><br>

            <button class="botonEmpezarTiempo-TiempoTexto" type="submit"><?php echo $texto["crearCuenta"];?></button>
        </form>
    </div>
</main>

<?php include "assets/phpComponentes/AfterMain.php"; ?>