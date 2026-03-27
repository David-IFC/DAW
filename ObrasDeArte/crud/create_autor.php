<?php
require_once '../functions.php';

$mensaje = '';
$tipo_mensaje = '';

if ($_POST) {
    $conn = conn();
    $nombre = $conn->real_escape_string(trim($_POST['nombre']));
    $nacionalidad = $conn->real_escape_string(trim($_POST['nacionalidad']));
    $fecha_nacimiento = trim($_POST['fecha_nacimiento']);
    $fecha_muerte = trim($_POST['fecha_muerte']);
    $imagen = $conn->real_escape_string(trim($_POST['imagen']));

    $fecha_nacimiento_sql = $fecha_nacimiento !== '' ? "'" . $conn->real_escape_string($fecha_nacimiento) . "'" : "NULL";
    $fecha_muerte_sql = $fecha_muerte !== '' ? "'" . $conn->real_escape_string($fecha_muerte) . "'" : "NULL";
    $nacionalidad_sql = $nacionalidad !== '' ? "'$nacionalidad'" : "NULL";
    $imagen_sql = $imagen !== '' ? "'$imagen'" : "NULL";

    if ($nombre === '' || $fecha_nacimiento === '') {
        $mensaje = 'El nombre y la fecha de nacimiento son obligatorios.';
        $tipo_mensaje = 'error';
    } else {
        $existe = $conn->query("SELECT id FROM creadores WHERE nombre = '$nombre' LIMIT 1");

        if ($existe && $existe->num_rows > 0) {
            $mensaje = 'Ese autor ya existe.';
            $tipo_mensaje = 'error';
        } else {
            $sql = "INSERT INTO creadores (nombre, nacionalidad, fecha_nacimiento, fecha_muerte, imagen) VALUES ('$nombre', $nacionalidad_sql, $fecha_nacimiento_sql, $fecha_muerte_sql, $imagen_sql)";

            if ($conn->query($sql)) {
                $mensaje = 'Autor creado correctamente.';
                $tipo_mensaje = 'exito';
                $_POST = [];
            } else {
                $mensaje = 'No se pudo crear el autor.';
                $tipo_mensaje = 'error';
            }
        }
    }

    $conn->close();
}

getheader();
?>

<h1>Nuevo autor</h1>
<p><a class="btn" href="listado_crud_autores.php">Volver al CRUD</a></p>

<?php if (!empty($mensaje)): ?>
    <p class="mensaje-<?= $tipo_mensaje ?>"><?= $mensaje ?></p>
<?php endif; ?>

<form class="form-crud" method="post">
    <label>Nombre del autor</label>
    <input type="text" name="nombre" value="<?= htmlspecialchars($_POST['nombre'] ?? '') ?>" required>

    <label>Nacionalidad</label>
    <input type="text" name="nacionalidad" value="<?= htmlspecialchars($_POST['nacionalidad'] ?? '') ?>">

    <label>Fecha de nacimiento</label>
    <input type="date" name="fecha_nacimiento" value="<?= htmlspecialchars($_POST['fecha_nacimiento'] ?? '') ?>" required>

    <label>Fecha de muerte</label>
    <input type="date" name="fecha_muerte" value="<?= htmlspecialchars($_POST['fecha_muerte'] ?? '') ?>">

    <label>Imagen</label>
    <input type="text" name="imagen" value="<?= htmlspecialchars($_POST['imagen'] ?? '') ?>">

    <input type="submit" value="Guardar autor">
</form>

<?php getfooter(); ?>
