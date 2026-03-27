<?php
require_once '../functions.php';

$id = (int) $_GET['id'];
$autor = consulta("SELECT * FROM creadores WHERE id = $id");
$autor = $autor[0];
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

    if ($nombre === '') {
        $mensaje = 'El nombre del autor es obligatorio.';
        $tipo_mensaje = 'error';
    } else {
        $existe = $conn->query("SELECT id FROM creadores WHERE nombre = '$nombre' AND id <> $id LIMIT 1");

        if ($existe && $existe->num_rows > 0) {
            $mensaje = 'Ya existe otro autor con ese nombre.';
            $tipo_mensaje = 'error';
        } else {
            $sql = "UPDATE creadores SET nombre = '$nombre', nacionalidad = $nacionalidad_sql, fecha_nacimiento = $fecha_nacimiento_sql, fecha_muerte = $fecha_muerte_sql, imagen = $imagen_sql WHERE id = $id";

            if ($conn->query($sql)) {
                $mensaje = 'Autor actualizado correctamente.';
                $tipo_mensaje = 'exito';
                $autor = consulta("SELECT * FROM creadores WHERE id = $id");
                $autor = $autor[0];
            } else {
                $mensaje = 'No se pudo actualizar el autor.';
                $tipo_mensaje = 'error';
            }
        }
    }

    $conn->close();
}

getheader();
?>

<h1>Editar autor</h1>
<p><a class="btn" href="listado_crud_autores.php">Volver al CRUD</a></p>

<?php if (!empty($mensaje)): ?>
    <p class="mensaje-<?= $tipo_mensaje ?>"><?= $mensaje ?></p>
<?php endif; ?>

<form class="form-crud" method="post">
    <label>Nombre del autor</label>
    <input type="text" name="nombre" value="<?= htmlspecialchars($autor['nombre']) ?>" required>

    <label>Nacionalidad</label>
    <input type="text" name="nacionalidad" value="<?= htmlspecialchars($autor['nacionalidad'] ?? '') ?>">

    <label>Fecha de nacimiento</label>
    <input type="date" name="fecha_nacimiento" value="<?= htmlspecialchars($autor['fecha_nacimiento'] ?? '') ?>">

    <label>Fecha de muerte</label>
    <input type="date" name="fecha_muerte" value="<?= htmlspecialchars($autor['fecha_muerte'] ?? '') ?>">

    <label>Imagen</label>
    <input type="text" name="imagen" value="<?= htmlspecialchars($autor['imagen'] ?? '') ?>">

    <input type="submit" value="Actualizar autor">
</form>

<?php getfooter(); ?>
