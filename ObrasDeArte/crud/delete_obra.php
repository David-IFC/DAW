<?php
require_once '../functions.php';

$id = (int) $_GET['id'];
$mensaje = '';

if ($id > 0) {
    $sql = "DELETE FROM obras WHERE id = $id";

    if (consulta($sql)) {
        $mensaje = 'Obra eliminada correctamente.';
    } else {
        $mensaje = 'No se pudo eliminar la obra.';
    }
}

getheader();
?>

<h1>Borrar obra</h1>
<p><?= $mensaje ?></p>
<p><a class="btn" href="listado_crud_obras.php">Volver al CRUD</a></p>

<?php getfooter(); ?>
