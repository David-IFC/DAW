<?php
// Carpeta de sesiones dentro del proyecto
$sessionPath = __DIR__ . '/tmp_sessions';

// Crear la carpeta si no existe
if (!is_dir($sessionPath)) {
    mkdir($sessionPath, 0777, true);
}

// Decirle a PHP que use esa carpeta
session_save_path($sessionPath);
session_start();

// Si se envía un idioma por GET (ej: index.php?lang=en), lo guardamos en la sesión
if (isset($_GET['lang'])) {
    $_SESSION['lang'] = $_GET['lang'];
}

// Si no hay idioma en sesión, usar español por defecto
$lang = $_SESSION['lang'] ?? 'es';

// Cargar el JSON según el idioma
$json_file = __DIR__ . "/assets/json/$lang.json";
//transforma el json
$texto = json_decode(file_get_contents($json_file), true);
?>

<?php
$titulo = "TestYourSkills";
$clase = "index";
$home = false;
$java = "";
$copy = true;
$idioma = true; ?>
<?php include "assets/phpComponentes/BeforeMain.php"; ?>

<div class="logo">

    <img src="assets/img/Logo.png" alt="Logo">

</div>
<main>

    <button class="BotonMenuPrincipal" onclick="transicion('TiempoTexto.php?lang=<?php echo $lang; ?>')">
        <span data-key="tiempoTexto"><?php echo $texto["tiempoTexto"]; ?></span></button>
    <button class="BotonMenuPrincipal" onclick="transicion('CuentaLetras.php')"><span
            data-key="cuentaLetras"><?php echo $texto["cuentaLetras"]; ?></span></button>
    <button class="BotonMenuPrincipal" onclick="transicion('Sudoku.php')"><span
            data-key="sudoku"><?php echo $texto["sudoku"]; ?></span></button>
    <button class="BotonMenuPrincipal" onclick="transicion('Punteria.php')"><span
            data-key="punteria"><?php echo $texto["punteria"]; ?></span></button>

</main>
<?php include "assets/phpComponentes/AfterMain.php"; ?>