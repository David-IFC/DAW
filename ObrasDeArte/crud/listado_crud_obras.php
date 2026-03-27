<?php
require_once '../functions.php';
getheader();

$filas_por_pagina = 5;
$pagina_actual = isset($_GET['pagina']) ? (int) $_GET['pagina'] : 1;

if ($pagina_actual < 1) {
    $pagina_actual = 1;
}

$total_obras_resultado = consulta("SELECT COUNT(*) AS total FROM obras");
$total_obras = (int) $total_obras_resultado[0]['total'];
$total_paginas = max(1, (int) ceil($total_obras / $filas_por_pagina));

if ($pagina_actual > $total_paginas) {
    $pagina_actual = $total_paginas;
}

$offset = ($pagina_actual - 1) * $filas_por_pagina;

$sql = "
SELECT
    obras.id,
    obras.titulo,
    obras.año AS anio,
    GROUP_CONCAT(DISTINCT creadores.nombre ORDER BY creadores.nombre SEPARATOR ', ') AS creadores,
    GROUP_CONCAT(DISTINCT disciplinas.nombre ORDER BY disciplinas.nombre SEPARATOR ', ') AS disciplinas
FROM obras
LEFT JOIN obras_creadores ON obras.id = obras_creadores.obra_id
LEFT JOIN creadores ON creadores.id = obras_creadores.creador_id
LEFT JOIN obras_disciplinas ON obras.id = obras_disciplinas.obra_id
LEFT JOIN disciplinas ON disciplinas.id = obras_disciplinas.disciplina_id
GROUP BY obras.id, obras.titulo, obras.año
ORDER BY obras.id ASC
LIMIT $filas_por_pagina OFFSET $offset
";
$obras = consulta($sql);
?>

<h1>CRUD de Obras</h1>

<div class="crud-panel-tabs">
    <a class="btn btn-panel" href="listado_crud_autores.php">CRUD Autores</a>
    <span class="btn btn-panel btn-panel-activo">CRUD Obras</span>
    <a class="btn btn-panel" href="listado_crud_disciplinas.php">CRUD Disciplinas</a>
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
                <th>Titulo</th>
                <th>A&ntilde;o</th>
                <th>Creadores</th>
                <th>Disciplinas</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <?php if (empty($obras)): ?>
                <tr>
                    <td colspan="6">No hay obras registradas.</td>
                </tr>
            <?php else: ?>
                <?php foreach ($obras as $obra): ?>
                    <tr>
                        <td><?= $obra['id'] ?></td>
                        <td><a class="enlace-autor" href="../infoObras.php?id=<?= $obra['id'] ?>&volver=crud"><?= $obra['titulo'] ?></a></td>
                        <td><?= $obra['anio'] ?></td>
                        <td><?= $obra['creadores'] ?></td>
                        <td><?= $obra['disciplinas'] ?></td>
                        <td>
                            <a href="update_obra.php?id=<?= $obra['id'] ?>">Editar</a> |
                            <a href="delete_obra.php?id=<?= $obra['id'] ?>" onclick="return confirm('&iquest;Seguro que quieres borrar esta obra?')">Borrar</a>
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
