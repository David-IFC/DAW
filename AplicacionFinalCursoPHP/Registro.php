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



?>

<?php include "assets/phpComponentes/datos.php"; ?>

<?php
$titulo = "Registro";
$clase = "Registro";
$java = "Registro.js";

// Mostrar mensaje de registro si existe
if (isset($_SESSION['mensaje_registro'])) {
    $mensaje = $_SESSION['mensaje_registro'];
    $clase = $mensaje['tipo'] === 'exito' ? 'mensajeExito' : 'mensajeError';
    echo "<div class='$clase'>" . htmlspecialchars($mensaje['texto']) . "</div>";
    unset($_SESSION['mensaje_registro']); // limpiar para no repetir
}
?>

<?php include "assets/phpComponentes/BeforeMain.php"; ?>

<main>
    <div class="contenedorPrincipal">
        <h2><?php echo $texto["resgistrar"]; ?></h2>
        <form id="registro" action="assets/db/ProcesarRegistro.php" method="post">
            <label for="username"><?php echo $texto["nombreDeUsuario"]; ?></label><br>
            <input type="text" id="username" name="username"><br><br>
            <!-- ponel required en los 2 campos🎐🎏🎏🎎🎎🎍🎍🎋🎋🎄🎄🎇🎇 -->
            <label for="password"><?php echo $texto["contraseña"]; ?></label><br>
            <input type="password" id="password" name="password"><br><br>

            <button class="botonEmpezarTiempo-TiempoTexto" type="submit"><?php echo $texto["crearCuenta"]; ?></button>
        </form>
    </div>
</main>

<?php include "assets/phpComponentes/AfterMain.php"; ?>