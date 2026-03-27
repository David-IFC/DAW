<? require '../functions.php'?>
<? getheader();?>

<?php
if(isset($_POST["true"])){
    $conn = conn();
    $sql = file_get_contents(__DIR__ . "/../arte.sql");

    if ($conn->multi_query($sql)) {?>
    
        <h1>Base de datos reseteada</h1>
        <p>Felicidades, la base de datos se ha actualizado correctamente</p>
        <a href="listado_crud_obras.php" class="btn">Volver</a>
    
    <?
    } else {
        echo "Error: " . $conn->error;
    }

    $conn->close();
}

else{
?>
    <h1>Reset</h1>
    <p>Cuidado, estas a punto de iniciar el reseteo de la base de datos. Sal de aqui si no estas seguro de querer hacer nada de esto.</p>

    <a href="listado_crud_obras.php" class="btn">Woops!, mejor me vuelvo</a>

    <form method="POST">
        <input type="hidden" name="true">
        <label><input type="checkbox" name="true" required>Soy consciente de lo que esto implica y voy a proceder</label>
        <input type="submit" value="Resetar Base de Datos bajo mi cuenta y riesgo">
    </form>

<? }?>

<? getfooter();?>
