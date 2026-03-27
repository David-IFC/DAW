<? require 'functions.php'?>
<? getheader();?>

<h1>Bienvenidos a <?= TITLE?></h1>
<p>Aqu&iacute; encontrar&aacute;s una lista de obras de car&aacute;cter multidisciplinar relacionadas con el artista y su &aacute;mbito.</p>

<?php
    $sql = "SELECT * FROM obras";
    $obras = consulta($sql);
?>

<ul class="galeria" id="lista-obras">
    <? foreach($obras as $obra):?>
        <li>
        <a href="infoObras.php?id=<?=$obra['id']?>">
            <h3><?=$obra['titulo']?></h3>
            <img src="<?=$obra['imagen']?>"/>
            <p><?=$obra['descripcion']?></p>
        </a>
        </li>
<? endforeach;?>
</ul>

<?php render_filter_obras_script(); ?>

<?getfooter();?>
