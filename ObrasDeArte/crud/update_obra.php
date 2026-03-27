<?php
require_once '../functions.php';

$id = (int) $_GET['id'];
$sql = "SELECT id, titulo, año AS anio, descripcion, imagen FROM obras WHERE id = $id";
$obra = consulta($sql);
$obra = $obra[0];
$creadores = consulta("SELECT id, nombre FROM creadores ORDER BY nombre ASC");
$disciplinas = consulta("SELECT id, nombre FROM disciplinas ORDER BY nombre ASC");
$creadores_actuales = consulta("SELECT creador_id FROM obras_creadores WHERE obra_id = $id");
$disciplinas_actuales = consulta("SELECT disciplina_id FROM obras_disciplinas WHERE obra_id = $id");
$creadores_actuales = array_map(fn($fila) => (int) $fila['creador_id'], $creadores_actuales);
$disciplinas_actuales = array_map(fn($fila) => (int) $fila['disciplina_id'], $disciplinas_actuales);
$mensaje = '';
$tipo_mensaje = '';

if ($_POST) {
    $conn = conn();

    $titulo = $conn->real_escape_string($_POST['titulo']);
    $anio = (int) $_POST['anio'];
    $descripcion = $conn->real_escape_string($_POST['descripcion']);
    $imagen = $conn->real_escape_string($_POST['imagen']);
    $creador_ids = isset($_POST['creador_ids']) ? array_values(array_unique(array_map('intval', $_POST['creador_ids']))) : [];
    $disciplina_ids = isset($_POST['disciplina_ids']) ? array_values(array_unique(array_map('intval', $_POST['disciplina_ids']))) : [];

    if (empty($creador_ids)) {
        $mensaje = 'Debes seleccionar al menos un creador.';
        $tipo_mensaje = 'error';
    } elseif (empty($disciplina_ids)) {
        $mensaje = 'Debes seleccionar al menos una disciplina.';
        $tipo_mensaje = 'error';
    } else {
        $sql_update = "UPDATE obras SET titulo = '$titulo', año = $anio, descripcion = '$descripcion', imagen = '$imagen' WHERE id = $id";

        if ($conn->query($sql_update)) {
            $conn->query("DELETE FROM obras_creadores WHERE obra_id = $id");
            $conn->query("DELETE FROM obras_disciplinas WHERE obra_id = $id");

            $ok = true;
            foreach ($creador_ids as $creador_id) {
                if (!$conn->query("INSERT INTO obras_creadores (obra_id, creador_id) VALUES ($id, $creador_id)")) {
                    $ok = false;
                }
            }

            foreach ($disciplina_ids as $disciplina_id) {
                if (!$conn->query("INSERT INTO obras_disciplinas (obra_id, disciplina_id) VALUES ($id, $disciplina_id)")) {
                    $ok = false;
                }
            }

            if ($ok) {
                $mensaje = 'Obra actualizada correctamente.';
                $tipo_mensaje = 'exito';
                $obra = consulta($sql);
                $obra = $obra[0];
                $creadores_actuales = $creador_ids;
                $disciplinas_actuales = $disciplina_ids;
            } else {
                $mensaje = 'No se pudieron actualizar las relaciones de la obra.';
                $tipo_mensaje = 'error';
            }
        } else {
            $mensaje = 'No se pudo actualizar la obra.';
            $tipo_mensaje = 'error';
        }
    }

    $conn->close();
}

getheader();
?>

<h1>Editar obra</h1>
<p><a class="btn" href="listado_crud_obras.php">Volver al CRUD</a></p>

<?php if (!empty($mensaje)): ?>
    <p class="mensaje-<?= $tipo_mensaje ?>"><?= $mensaje ?></p>
<?php endif; ?>

<form class="form-crud" method="post">
    <label>Titulo</label>
    <input type="text" name="titulo" value="<?= htmlspecialchars($obra['titulo']) ?>" required>

    <label>A&ntilde;o</label>
    <input type="number" name="anio" value="<?= htmlspecialchars($obra['anio']) ?>" required>

    <label>Descripcion</label>
    <textarea name="descripcion" rows="4" required><?= htmlspecialchars($obra['descripcion']) ?></textarea>

    <label>Imagen</label>
    <input type="text" name="imagen" value="<?= htmlspecialchars($obra['imagen']) ?>" required>

    <label>Creadores</label>
    <div class="creadores-builder" data-relaciones-builder>
        <div class="creadores-lista" data-relaciones-lista></div>
        <button class="btn btn-secundario" type="button" data-add-relacion>A&ntilde;adir otro creador</button>
    </div>

    <label>Disciplinas</label>
    <div class="creadores-builder" data-relaciones-builder>
        <div class="creadores-lista" data-relaciones-lista></div>
        <button class="btn btn-secundario" type="button" data-add-relacion>A&ntilde;adir otra disciplina</button>
    </div>

    <input type="submit" value="Actualizar obra">
</form>

<template id="creador-select-template">
    <div class="creador-item">
        <select name="creador_ids[]" required data-relacion-select>
            <?php foreach ($creadores as $creador): ?>
                <option value="<?= $creador['id'] ?>"><?= htmlspecialchars($creador['nombre']) ?></option>
            <?php endforeach; ?>
        </select>
        <button class="btn btn-secundario btn-eliminar-creador" type="button" data-remove-relacion>Quitar</button>
    </div>
</template>

<template id="disciplina-select-template">
    <div class="creador-item">
        <select name="disciplina_ids[]" required data-relacion-select>
            <?php foreach ($disciplinas as $disciplina): ?>
                <option value="<?= $disciplina['id'] ?>"><?= htmlspecialchars($disciplina['nombre']) ?></option>
            <?php endforeach; ?>
        </select>
        <button class="btn btn-secundario btn-eliminar-creador" type="button" data-remove-relacion>Quitar</button>
    </div>
</template>

<?php
render_relation_builder_script([
    [
        'templateId' => 'creador-select-template',
        'initialValues' => array_values($creadores_actuales),
    ],
    [
        'templateId' => 'disciplina-select-template',
        'initialValues' => array_values($disciplinas_actuales),
    ],
]);
?>

<?php getfooter(); ?>
