<?php
$sessionPath = __DIR__ . '/tmp_sessions';
if (!is_dir($sessionPath)) {
    mkdir($sessionPath, 0777, true);
}
session_save_path($sessionPath);
session_start(); // Inicia sesión en memoria


if (isset($_GET['lang'])) {
    $_SESSION['lang'] = $_GET['lang'];
} elseif (!isset($_GET['lang'])) {
    // Si no viene por GET, reiniciar a español
    $_SESSION['lang'] = 'es';
}

$lang = $_SESSION['lang'];


// Cargar el JSON según el idioma
$json_file = __DIR__ . "/assets/json/$lang.json";
$texto = json_decode(file_get_contents($json_file), true);
?>

<?php
$titulo = "TestYourSkills";
$clase = "index";
$home = false;
$java = "";
$copy = true;
$idioma = true;
?>
<?php include "assets/phpComponentes/BeforeMain.php"; ?>

<div class="logo">
    <img src="assets/img/Logo.png" alt="Logo">
</div>

<main>
    <button class="BotonMenuPrincipal" onclick="transicion('TiempoTexto.php?lang=<?php echo $lang; ?>')">
        <span data-key="tiempoTexto"><?php echo $texto["tiempoTexto"]; ?></span>
    </button>
    <button class="BotonMenuPrincipal" onclick="transicion('CuentaLetras.php?lang=<?php echo $lang; ?>')">
        <span data-key="cuentaLetras"><?php echo $texto["cuentaLetras"]; ?></span>
    </button>
    <button class="BotonMenuPrincipal" onclick="transicion('Sudoku.php?lang=<?php echo $lang; ?>')">
        <span data-key="sudoku"><?php echo $texto["sudoku"]; ?></span>
    </button>
    <button class="BotonMenuPrincipal" onclick="transicion('Punteria.php?lang=<?php echo $lang; ?>')">
        <span data-key="punteria"><?php echo $texto["punteria"]; ?></span>
    </button>
</main>

<?php include "assets/phpComponentes/AfterMain.php"; ?>
