<? require 'functions.php' ?>
<? getheader(); ?>

<?php
$id = $_GET["id"];
$volver_crud = isset($_GET["volver"]) && $_GET["volver"] === "crud";
$volver_crud_disciplinas = isset($_GET["volver"]) && $_GET["volver"] === "crud_disciplinas";
$volver_url = $volver_crud ? "crud/listado_crud_obras.php" : ($volver_crud_disciplinas ? "crud/listado_crud_disciplinas.php" : "index.php");
$volver_query = $volver_crud ? "&volver=crud" : ($volver_crud_disciplinas ? "&volver=crud_disciplinas" : "");

$sql = "SELECT * FROM disciplinas WHERE id='$id'";
$disciplina = consulta($sql);
$sql = "SELECT obras.* FROM obras INNER JOIN obras_disciplinas ON obras.id = obras_disciplinas.obra_id WHERE obras_disciplinas.disciplina_id='$id'";
$obras = consulta($sql);

$disciplina = $disciplina[0];
?>

<a href="<?= $volver_url ?>" class="btn">Volver</a>

<h1><?= $disciplina['nombre'] ?></h1>
<h2>Obras</h2>

<ul class="galeria galeria-horizontal">
    <? foreach($obras as $obra): ?>
        <li>
            <a href="infoObras.php?id=<?= $obra['id'] ?><?= $volver_query ?>">
                <h3><?= $obra['titulo'] ?></h3>
                <img src="<?= $obra['imagen'] ?>"/>
                <p><?= $obra['descripcion'] ?></p>
            </a>
        </li>
    <? endforeach; ?>
</ul>

<? getfooter(); ?>
