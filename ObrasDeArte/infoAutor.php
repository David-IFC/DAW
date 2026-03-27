<? require 'functions.php' ?>
<? getheader(); ?>

<?php
$id = $_GET["id"];
$volver_crud = isset($_GET["volver"]) && $_GET["volver"] === "crud";
$volver_crud_autores = isset($_GET["volver"]) && $_GET["volver"] === "crud_autores";
$volver_url = $volver_crud ? "crud/listado_crud_obras.php" : ($volver_crud_autores ? "crud/listado_crud_autores.php" : "index.php");
$volver_query = $volver_crud ? "&volver=crud" : ($volver_crud_autores ? "&volver=crud_autores" : "");

$sql = "SELECT * FROM creadores WHERE id='$id'";
$autor = consulta($sql);
$sql = "SELECT obras.* FROM obras INNER JOIN obras_creadores ON obras.id = obras_creadores.obra_id WHERE obras_creadores.creador_id='$id'";
$obras = consulta($sql);

$autor = $autor[0];
?>

<a href="<?= $volver_url ?>" class="btn">Volver</a>

<h1><?= $autor['nombre'] ?></h1>
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
