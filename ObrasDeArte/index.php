<? require 'functions.php'?>
<? getheader();?>

<h1>Bienvenidos a <?= TITLE?></h1>
<p>Aqu&iacute; encontrar&aacute;s una lista de obras de car&aacute;cter multidisciplinar relacionadas con el artista y su &aacute;mbito.</p>

<?php
    $obras_por_pagina = 5;
    $pagina_actual = isset($_GET['pagina']) ? (int) $_GET['pagina'] : 1;

    if ($pagina_actual < 1) {
        $pagina_actual = 1;
    }

    $total_obras_resultado = consulta("SELECT COUNT(*) AS total FROM obras");
    $total_obras = (int) $total_obras_resultado[0]['total'];
    $total_paginas = max(1, (int) ceil($total_obras / $obras_por_pagina));

    if ($pagina_actual > $total_paginas) {
        $pagina_actual = $total_paginas;
    }

    $offset = ($pagina_actual - 1) * $obras_por_pagina;
    $sql = "SELECT * FROM obras LIMIT $obras_por_pagina OFFSET $offset";
    $obras = consulta($sql);
?>

<ul class="galeria" id="lista-obras">
    <? foreach($obras as $obra):?>
        <li>
        <a href="infoObras.php?id=<?=$obra['id']?>">
            <h3 class="titulo-obra"><?=$obra['titulo']?></h3>
            <img src="<?=$obra['imagen']?>"/>
            <p><?=$obra['descripcion']?></p>
        </a>
        </li>
<? endforeach;?>
</ul>

<?php if ($total_paginas > 1): ?>
    <div class="paginacion-galeria">
        <?php if ($pagina_actual > 1): ?>
            <a class="btn" href="index.php?pagina=<?= $pagina_actual - 1 ?>">Anterior</a>
        <?php else: ?>
            <span class="btn btn-disabled">Anterior</span>
        <?php endif; ?>

        <span class="paginacion-indicador"><?= $pagina_actual ?>/<?= $total_paginas ?></span>

        <?php if ($pagina_actual < $total_paginas): ?>
            <a class="btn" href="index.php?pagina=<?= $pagina_actual + 1 ?>">Siguiente</a>
        <?php else: ?>
            <span class="btn btn-disabled">Siguiente</span>
        <?php endif; ?>
    </div>
<?php endif; ?>

<?php render_filter_obras_script(); ?>

<?getfooter();?>
