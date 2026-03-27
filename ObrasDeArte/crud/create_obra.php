<?php
require_once '../functions.php';

$creadores = consulta("SELECT id, nombre FROM creadores ORDER BY nombre ASC");
$disciplinas = consulta("SELECT id, nombre FROM disciplinas ORDER BY nombre ASC");
$mensaje = '';
$tipo_mensaje = '';
$creador_ids = $_POST['creador_ids'] ?? [count($creadores) ? $creadores[0]['id'] : ''];
$disciplina_ids = $_POST['disciplina_ids'] ?? [count($disciplinas) ? $disciplinas[0]['id'] : ''];

if ($_POST) {
    $conn = conn();

    $titulo = $conn->real_escape_string($_POST['titulo']);
    $anio = (int) $_POST['anio'];
    $descripcion = $conn->real_escape_string($_POST['descripcion']);
    $imagen = trim($_POST['imagen']);
    $creador_ids = isset($_POST['creador_ids']) ? array_values(array_unique(array_map('intval', $_POST['creador_ids']))) : [];
    $disciplina_ids = isset($_POST['disciplina_ids']) ? array_values(array_unique(array_map('intval', $_POST['disciplina_ids']))) : [];
    $upload = upload_image_file($_FILES['imagen_archivo'] ?? null, __DIR__ . '/../assets/uploads/obras', 'assets/uploads/obras');

    if (empty($creador_ids)) {
        $mensaje = 'Debes seleccionar al menos un creador.';
        $tipo_mensaje = 'error';
    } elseif (empty($disciplina_ids)) {
        $mensaje = 'Debes seleccionar al menos una disciplina.';
        $tipo_mensaje = 'error';
    } elseif (!$upload['ok']) {
        $mensaje = $upload['message'];
        $tipo_mensaje = 'error';
    } else {
        $imagen_final = $upload['path'] !== '' ? $upload['path'] : $imagen;
        $imagen_sql = $conn->real_escape_string($imagen_final);
        $sql = "INSERT INTO obras (titulo, año, descripcion, imagen) VALUES ('$titulo', $anio, '$descripcion', '$imagen_sql')";

        if ($conn->query($sql)) {
            $obra_id = $conn->insert_id;
            $ok = true;

            foreach ($creador_ids as $creador_id) {
                if (!$conn->query("INSERT INTO obras_creadores (obra_id, creador_id) VALUES ($obra_id, $creador_id)")) {
                    $ok = false;
                }
            }

            foreach ($disciplina_ids as $disciplina_id) {
                if (!$conn->query("INSERT INTO obras_disciplinas (obra_id, disciplina_id) VALUES ($obra_id, $disciplina_id)")) {
                    $ok = false;
                }
            }

            if ($ok) {
                $mensaje = 'Obra creada correctamente.';
                $tipo_mensaje = 'exito';
                $creador_ids = [count($creadores) ? $creadores[0]['id'] : ''];
                $disciplina_ids = [count($disciplinas) ? $disciplinas[0]['id'] : ''];
                $_POST = [];
            } else {
                $mensaje = 'No se pudieron guardar las relaciones de la obra.';
                $tipo_mensaje = 'error';
            }
        } else {
            $mensaje = 'No se pudo crear la obra.';
            $tipo_mensaje = 'error';
        }
    }

    $conn->close();
}

getheader();
?>

<h1>Nueva obra</h1>
<p><a class="btn" href="listado_crud_obras.php">Volver al CRUD</a></p>

<?php if (!empty($mensaje)): ?>
    <p class="mensaje-<?= $tipo_mensaje ?>"><?= $mensaje ?></p>
<?php endif; ?>

<form class="form-crud" method="post" enctype="multipart/form-data">
    <label>Creadores</label>
    <div class="creadores-builder" data-relaciones-builder>
        <div class="creadores-lista" data-relaciones-lista></div>
        <button class="btn btn-secundario" type="button" data-add-relacion>A&ntilde;adir otro creador</button>
    </div>

    <label>Titulo</label>
    <input type="text" name="titulo" value="<?= htmlspecialchars($_POST['titulo'] ?? '') ?>" required>

    <label>A&ntilde;o</label>
    <input type="number" name="anio" value="<?= htmlspecialchars($_POST['anio'] ?? '') ?>" required>

    <label>Descripcion</label>
    <textarea name="descripcion" rows="4" required><?= htmlspecialchars($_POST['descripcion'] ?? '') ?></textarea>

    <label>Imagen por URL</label>
    <input type="text" name="imagen" value="<?= htmlspecialchars($_POST['imagen'] ?? '') ?>" placeholder="Pega una URL de imagen">
    <p class="ayuda-form">Tambien puedes subir un archivo. Si haces ambas cosas, se usara el archivo subido.</p>

    <label>Subir imagen</label>
    <input type="file" name="imagen_archivo" accept=".jpg,.jpeg,.png,.gif,.webp">

    <label>Disciplinas</label>
    <div class="creadores-builder" data-relaciones-builder>
        <div class="creadores-lista" data-relaciones-lista></div>
        <button class="btn btn-secundario" type="button" data-add-relacion>A&ntilde;adir otra disciplina</button>
    </div>

    <input type="submit" value="Guardar obra">
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
        'initialValues' => array_values($creador_ids),
    ],
    [
        'templateId' => 'disciplina-select-template',
        'initialValues' => array_values($disciplina_ids),
    ],
]);
?>

<?php getfooter(); ?>
