<?php
require_once '../functions.php';

$mensaje = '';
$tipo_mensaje = '';

if ($_POST) {
    $conn = conn();
    $nombre = $conn->real_escape_string(trim($_POST['nombre']));
    $imagen = $conn->real_escape_string(trim($_POST['imagen']));
    $imagen_sql = $imagen !== '' ? "'$imagen'" : "NULL";

    if ($nombre === '') {
        $mensaje = 'El nombre de la disciplina es obligatorio.';
        $tipo_mensaje = 'error';
    } else {
        $existe = $conn->query("SELECT id FROM disciplinas WHERE nombre = '$nombre' LIMIT 1");

        if ($existe && $existe->num_rows > 0) {
            $mensaje = 'Esa disciplina ya existe.';
            $tipo_mensaje = 'error';
        } else {
            $sql = "INSERT INTO disciplinas (nombre, imagen) VALUES ('$nombre', $imagen_sql)";

            if ($conn->query($sql)) {
                $mensaje = 'Disciplina creada correctamente.';
                $tipo_mensaje = 'exito';
                $_POST = [];
            } else {
                $mensaje = 'No se pudo crear la disciplina.';
                $tipo_mensaje = 'error';
            }
        }
    }

    $conn->close();
}

getheader();
?>

<h1>Nueva disciplina</h1>
<p><a class="btn" href="listado_crud_disciplinas.php">Volver al CRUD</a></p>

<?php if (!empty($mensaje)): ?>
    <p class="mensaje-<?= $tipo_mensaje ?>"><?= $mensaje ?></p>
<?php endif; ?>

<form class="form-crud" method="post">
    <label>Nombre de la disciplina</label>
    <input type="text" name="nombre" value="<?= htmlspecialchars($_POST['nombre'] ?? '') ?>" required>

    <label>Imagen</label>
    <input type="text" name="imagen" value="<?= htmlspecialchars($_POST['imagen'] ?? '') ?>">

    <input type="submit" value="Guardar disciplina">
</form>

<?php getfooter(); ?>
