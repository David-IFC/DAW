<? require 'functions.php' ?>
<? getheader(); ?>

<?php
$id = $_GET["id"];
$volver_crud = isset($_GET["volver"]) && $_GET["volver"] === "crud";
$volver_url = $volver_crud ? "crud/listado_crud_obras.php" : "index.php";
$volver_query = $volver_crud ? "&volver=crud" : "";

$sql = "SELECT * FROM obras WHERE id='$id'";
$obra = consulta($sql);
$sql = "SELECT creadores.id, creadores.nombre FROM creadores INNER JOIN obras_creadores ON creadores.id = obras_creadores.creador_id WHERE obras_creadores.obra_id='$id' ORDER BY creadores.nombre ASC";
$autores = consulta($sql);
$sql = "SELECT disciplinas.id, disciplinas.nombre FROM disciplinas INNER JOIN obras_disciplinas ON disciplinas.id = obras_disciplinas.disciplina_id WHERE obras_disciplinas.obra_id='$id' ORDER BY disciplinas.nombre ASC";
$disciplinas = consulta($sql);

$obra = $obra[0];
?>

<a href="<?= $volver_url ?>" class="btn">Volver</a>

<h3><?= $obra['titulo'] ?></h3>
<img src="<?= $obra['imagen'] ?>" />
<p><strong>Autor</strong></p>
<p>
    <?php foreach ($autores as $index => $autor): ?>
        <?php if ($index > 0): ?>, <?php endif; ?>
        <a class="enlace-autor" href="infoAutor.php?id=<?= $autor['id'] ?><?= $volver_query ?>"><?= $autor['nombre'] ?></a>
    <?php endforeach; ?>
</p>
<p><strong>Descripci&oacute;n</strong></p>
<p><?= $obra['descripcion'] ?></p>
<p><strong>Disciplinas</strong></p>
<p>
    <?php foreach ($disciplinas as $index => $disciplina): ?>
        <?php if ($index > 0): ?>, <?php endif; ?>
        <a class="enlace-autor" href="infoDisciplina.php?id=<?= $disciplina['id'] ?><?= $volver_query ?>"><?= $disciplina['nombre'] ?></a>
    <?php endforeach; ?>
</p>

<? getfooter(); ?>
