<?php
require_once "db.php";
session_start();

// Asegúrate de que el usuario esté logueado
if (!isset($_SESSION['NombreUsuario'])) {
    die("No hay usuario en sesión");
}

// Recibir datos desde JS
$juego = $_POST['juego'] ?? null;          // Ej: 'TiempoTexto', 'Sudoku', etc.
$puntuacion = $_POST['puntuacion'] ?? null;

// Validaciones básicas
if (!$juego || $puntuacion === null) {
    die("Faltan datos");
}
//parametro juego correcto
$juegosValidos = ['TiempoTexto', 'Sudoku', 'Cuentaletras', 'Punteria'];
if (!in_array($juego, $juegosValidos)) {
    die("Juego no válido");
}
// Obtener el ID del usuario
$stmt = $conexion->prepare("SELECT id FROM usuarios WHERE user = :user");
$stmt->execute(['user' => $_SESSION['NombreUsuario']]);
$idUsuario = $stmt->fetchColumn();

// Leer los intentos actuales
$col1 = $juego . "_intento1";
$col2 = $juego . "_intento2";
$col3 = $juego . "_intento3";

$stmt = $conexion->prepare("
    SELECT $col1, $col2, $col3 
    FROM puntuaciones 
    WHERE usuario_id = :id
");
$stmt->execute(['id' => $idUsuario]);
$intentos = $stmt->fetch(PDO::FETCH_ASSOC);

if ($intentos[$col1] === null) {
    $updateCol = $col1;
} elseif ($intentos[$col2] === null) {
    $updateCol = $col2;
} elseif ($intentos[$col3] === null) {
    $updateCol = $col3;
} else {
    // Si los tres están llenos, reiniciamos: ponemos la nueva puntuación en el primero y borramos segundo y tercero
    $stmt = $conexion->prepare("
        UPDATE puntuaciones 
        SET $col1 = :puntuacion,
            $col2 = NULL,
            $col3 = NULL
        WHERE usuario_id = :id
    ");
    $stmt->execute([
        'puntuacion' => $puntuacion,
        'id' => $idUsuario
    ]);

    // También actualizar el mejor intento
    $colMejor = $juego . "_mejor";
    $stmt = $conexion->prepare("
        UPDATE puntuaciones 
        SET $colMejor = GREATEST(IFNULL($colMejor, 0), :puntuacion)
        WHERE usuario_id = :id
    ");
    $stmt->execute([
        'puntuacion' => $puntuacion,
        'id' => $idUsuario
    ]);

    exit; // Terminamos
}

$colMejor = $juego . "_mejor";

$stmt = $conexion->prepare("
    UPDATE puntuaciones
    SET $updateCol = :puntuacion,
        $colMejor = GREATEST(IFNULL($colMejor, 0), :puntuacion)
    WHERE usuario_id = :id
");
$stmt->execute([
    'puntuacion' => $puntuacion,
    'id' => $idUsuario
]);
?>