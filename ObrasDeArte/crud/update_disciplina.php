<?php
require_once '../functions.php';

$id = (int) $_GET['id'];
$disciplina = consulta("SELECT * FROM disciplinas WHERE id = $id");
$disciplina = $disciplina[0];
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
        $existe = $conn->query("SELECT id FROM disciplinas WHERE nombre = '$nombre' AND id <> $id LIMIT 1");

        if ($existe && $existe->num_rows > 0) {
            $mensaje = 'Ya existe otra disciplina con ese nombre.';
            $tipo_mensaje = 'error';
        } else {
            $sql = "UPDATE disciplinas SET nombre = '$nombre', imagen = $imagen_sql WHERE id = $id";

            if ($conn->query($sql)) {
                $mensaje = 'Disciplina actualizada correctamente.';
                $tipo_mensaje = 'exito';
                $disciplina = consulta("SELECT * FROM disciplinas WHERE id = $id");
                $disciplina = $disciplina[0];
            } else {
                $mensaje = 'No se pudo actualizar la disciplina.';
                $tipo_mensaje = 'error';
            }
        }
    }

    $conn->close();
}

getheader();
?>

<h1>Editar disciplina</h1>
<p><a class="btn" href="listado_crud_disciplinas.php">Volver al CRUD</a></p>

<?php if (!empty($mensaje)): ?>
    <p class="mensaje-<?= $tipo_mensaje ?>"><?= $mensaje ?></p>
<?php endif; ?>

<form class="form-crud" method="post">
    <label>Nombre de la disciplina</label>
    <input type="text" name="nombre" value="<?= htmlspecialchars($disciplina['nombre']) ?>" required>

    <label>Imagen</label>
    <input type="text" name="imagen" value="<?= htmlspecialchars($disciplina['imagen'] ?? '') ?>">

    <input type="submit" value="Actualizar disciplina">
</form>

<?php getfooter(); ?>
