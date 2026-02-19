<?php
$sessionPath = __DIR__ . '/tmp_sessions';
if (!is_dir($sessionPath)) {
    mkdir($sessionPath, 0777, true);
}
session_save_path($sessionPath);
session_start();


if (isset($_SESSION['usuario']) && $_SESSION['usuario'] == 'admin') {
   
}else{
 // Redirigir a index
    header("Location: index.php");
    // Detener el script por completo
    exit();
}

?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurante</title>
    <meta name="description">
    <link rel="stylesheet" href="style.css">
</head>

<body id="inicio">
    <header>

        <nav>

        </nav>
    </header>
    <main class="formulario">
        <h1>Sidreria Davine 🍾</h1>


        <h1>Agregar nuevo plato</h1>
        <form action="platocreado.php" method="get">
            <label class="form">Categoria</label>
            <select required name="categoria" id="opcion">
                <option value="">-- Selecciona --</option>
                <option value="Primero">Primero</option>
                <option value="Segundo">Segundo</option>
                <option value="Postre">Postre</option>
                <option value="Bebida">Bebida</option>
            </select>
            <br>
            <label class="form">Nombre del plato</label>
            <input required type="text" placeholder="insertar nombre del plato" name="nombrePlato" class="form">

            <br>
            <label class="form">Ingredientes</label>
            <input required type="text" placeholder="insertar ingredientes" name="ingredientes" class="form">
            <br>
            <label class="form">Alergenos</label>
            <input required type="text" placeholder="insertar alergenos" name="alergenos" class="form">
            <br>
            <label class="form">Precio</label>
            <input required type="number" min="0" placeholder="insertar precio" name="precio" class="form">
            <br>
            <label class="form">Url de la Foto</label>
            <input type="text" placeholder="insertar foto" name="foto" class="form">
            <br>

            <input type="submit" value="Guardar Plato" class="btnSave" class="form">
        </form>

    </main>

    <footer>
        <nav>
            &copy 2026 Sidreria Davine 🍾
        </nav>

    </footer>
    <script src="Script.js"> </script>
</body>

</html>