<?php
require_once '../functions.php';
getheader();

$sql = "
SELECT
    creadores.id,
    creadores.nombre,
    creadores.nacionalidad,
    creadores.fecha_nacimiento,
    creadores.fecha_muerte,
    COUNT(DISTINCT obras_creadores.obra_id) AS total_obras
FROM creadores
LEFT JOIN obras_creadores ON creadores.id = obras_creadores.creador_id
GROUP BY creadores.id, creadores.nombre, creadores.nacionalidad, creadores.fecha_nacimiento, creadores.fecha_muerte
ORDER BY creadores.nombre ASC
";
$autores = consulta($sql);
?>

<h1>CRUD de Autores</h1>

<div class="crud-panel-tabs">
    <span class="btn btn-panel btn-panel-activo">CRUD Autores</span>
    <a class="btn btn-panel" href="listado_crud_obras.php">CRUD Obras</a>
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
                <th>Nombre</th>
                <th>Nacionalidad</th>
                <th>Nacimiento</th>
                <th>Muerte</th>
                <th>Obras</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <?php if (empty($autores)): ?>
                <tr>
                    <td colspan="7">No hay autores registrados.</td>
                </tr>
            <?php else: ?>
                <?php foreach ($autores as $autor): ?>
                    <tr>
                        <td><?= $autor['id'] ?></td>
                        <td><a class="enlace-autor" href="../infoAutor.php?id=<?= $autor['id'] ?>&volver=crud_autores"><?= $autor['nombre'] ?></a></td>
                        <td><?= $autor['nacionalidad'] ?: '-' ?></td>
                        <td><?= $autor['fecha_nacimiento'] ?: '-' ?></td>
                        <td><?= $autor['fecha_muerte'] ?: '-' ?></td>
                        <td><?= $autor['total_obras'] ?></td>
                        <td>
                            <a href="update_autor.php?id=<?= $autor['id'] ?>">Editar</a> |
                            <a href="delete_autor.php?id=<?= $autor['id'] ?>" onclick="return confirm('&iquest;Seguro que quieres borrar este autor?')">Borrar</a>
                        </td>
                    </tr>
                <?php endforeach; ?>
            <?php endif; ?>
        </tbody>
    </table>
</div>

<?php render_filter_tabla_script(); ?>
<?php getfooter(); ?>
