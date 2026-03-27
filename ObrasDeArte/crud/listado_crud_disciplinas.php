<?php
require_once '../functions.php';
getheader();

$filas_por_pagina = 5;
$pagina_actual = isset($_GET['pagina']) ? (int) $_GET['pagina'] : 1;

if ($pagina_actual < 1) {
    $pagina_actual = 1;
}

$total_disciplinas_resultado = consulta("SELECT COUNT(*) AS total FROM disciplinas");
$total_disciplinas = (int) $total_disciplinas_resultado[0]['total'];
$total_paginas = max(1, (int) ceil($total_disciplinas / $filas_por_pagina));

if ($pagina_actual > $total_paginas) {
    $pagina_actual = $total_paginas;
}

$offset = ($pagina_actual - 1) * $filas_por_pagina;

$sql = "
SELECT
    disciplinas.id,
    disciplinas.nombre,
    disciplinas.imagen,
    COUNT(DISTINCT obras_disciplinas.obra_id) AS total_obras
FROM disciplinas
LEFT JOIN obras_disciplinas ON disciplinas.id = obras_disciplinas.disciplina_id
GROUP BY disciplinas.id, disciplinas.nombre, disciplinas.imagen
ORDER BY disciplinas.nombre ASC
LIMIT $filas_por_pagina OFFSET $offset
";
$disciplinas = consulta($sql);
?>

<h1>CRUD de Disciplinas</h1>

<div class="crud-panel-tabs">
    <a class="btn btn-panel" href="listado_crud_autores.php">CRUD Autores</a>
    <a class="btn btn-panel" href="listado_crud_obras.php">CRUD Obras</a>
    <span class="btn btn-panel btn-panel-activo">CRUD Disciplinas</span>
</div>

<div class="crud-acciones">
    <a class="btn" href="create_obra.php">Nueva Obra</a>
    <a class="btn" href="create_autor.php">Nuevo Autor</a>
    <a class="btn" href="create_disciplina.php">Nueva Disciplina</a>
    <a class="btn" href="reset.php">Reset</a>
</div>

<div class="tabla-scroll">
    <table class="tabla-crud">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Obras</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <?php if (empty($disciplinas)): ?>
                <tr>
                    <td colspan="5">No hay disciplinas registradas.</td>
                </tr>
            <?php else: ?>
                <?php foreach ($disciplinas as $disciplina): ?>
                    <tr>
                        <td><?= $disciplina['id'] ?></td>
                        <td><a class="enlace-autor" href="../infoDisciplina.php?id=<?= $disciplina['id'] ?>&volver=crud_disciplinas"><?= $disciplina['nombre'] ?></a></td>
                        <td><?= $disciplina['imagen'] ?: '-' ?></td>
                        <td><?= $disciplina['total_obras'] ?></td>
                        <td>
                            <a href="update_disciplina.php?id=<?= $disciplina['id'] ?>">Editar</a> |
                            <a href="delete_disciplina.php?id=<?= $disciplina['id'] ?>" onclick="return confirm('&iquest;Seguro que quieres borrar esta disciplina?')">Borrar</a>
                        </td>
                    </tr>
                <?php endforeach; ?>
            <?php endif; ?>
        </tbody>
    </table>
</div>

<?php render_pagination_controls($pagina_actual, $total_paginas); ?>
<?php render_filter_tabla_script(); ?>
<?php getfooter(); ?>
