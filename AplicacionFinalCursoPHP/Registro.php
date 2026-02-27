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
$repetido = $_SESSION['repetido'] ?? null;
unset($_SESSION['NombreUsuario']);
unset($_SESSION['repetido']);

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
        <?php if ($repetido): ?>
            <p class="mensaje rojo">
                <?php echo $texto["ElNombreDeUsuario"] . " " . $nombreUsuario . " " . $texto["YaHaSidoUtilizado"] ?>
            </p>
            <br>
            <button class="botonEmpezarTiempo-TiempoTexto" onclick="transicion('?lang=<?= $lang ?>')">
                <?php echo $texto["reintentar"] ?></button>
        <?php elseif ($nombreUsuario): ?>
            <p class="mensaje verde">
                <?php echo $texto["ElUsuario"] . " " . $nombreUsuario . " " . $texto["CreadoCorrectamente"] ?>
            </p>
            <br>
            <button class="botonEmpezarTiempo-TiempoTexto" onclick="transicion('?lang=<?= $lang ?>')">
                <?php echo $texto["crearOtroUsuario"] ?></button></button>

        <?php else: ?>
            <h2><?php echo $texto["resgistrar"]; ?></h2>
            <form id="registro" action="assets/db/ProcesarRegistro.php" method="post">
                <label for="username"><?php echo $texto["nombreDeUsuario"]; ?></label><br>
                <input type="text" id="username" required name="username"><br><br>
                <label for="password"><?php echo $texto["contraseña"]; ?></label><br>
                <input type="password" id="password" required name="password"><br><br>

                <button class="botonEmpezarTiempo-TiempoTexto" type="submit"><?php echo $texto["crearCuenta"]; ?></button>
            </form>
        <?php endif; ?>
    </div>
</main>

<?php include "assets/phpComponentes/AfterMain.php"; ?>