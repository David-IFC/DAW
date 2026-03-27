<?php
require_once '../functions.php';

$id = (int) $_GET['id'];
$mensaje = '';
$tipo_mensaje = '';

if ($id > 0) {
    $sql = "DELETE FROM creadores WHERE id = $id";

    if (consulta($sql)) {
        $mensaje = 'Autor eliminado correctamente.';
        $tipo_mensaje = 'exito';
    } else {
        $mensaje = 'No se pudo eliminar el autor.';
        $tipo_mensaje = 'error';
    }
}

getheader();
?>

<h1>Borrar autor</h1>
<p class="mensaje-<?= $tipo_mensaje ?>"><?= $mensaje ?></p>
<p><a class="btn" href="listado_crud_autores.php">Volver al CRUD</a></p>

<?php getfooter(); ?>
