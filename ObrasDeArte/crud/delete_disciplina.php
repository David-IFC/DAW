<?php
require_once '../functions.php';

$id = (int) $_GET['id'];
$mensaje = '';
$tipo_mensaje = '';

if ($id > 0) {
    $sql = "DELETE FROM disciplinas WHERE id = $id";

    if (consulta($sql)) {
        $mensaje = 'Disciplina eliminada correctamente.';
        $tipo_mensaje = 'exito';
    } else {
        $mensaje = 'No se pudo eliminar la disciplina.';
        $tipo_mensaje = 'error';
    }
}

getheader();
?>

<h1>Borrar disciplina</h1>
<p class="mensaje-<?= $tipo_mensaje ?>"><?= $mensaje ?></p>
<p><a class="btn" href="listado_crud_disciplinas.php">Volver al CRUD</a></p>

<?php getfooter(); ?>
