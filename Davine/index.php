<?php
$sessionPath = __DIR__ . '/tmp_sessions';
if (!is_dir($sessionPath)) {
    mkdir($sessionPath, 0777, true);
}
session_save_path($sessionPath);

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (isset($_SESSION['usuario'])) {
    if ($_SESSION['usuario'] === 'admin') {
        echo ' <a href="logout.php" class="btnSave">LogOut</a>';
        
    }
} else {
    echo '<a href="crearUsuario.php"class="btnSave">Login</a>';
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
    <main>


        <h1>Sidreria Davine 🍾</h1>

        <?php
        //cargamos el archivo JSON
        $json = file_get_contents(__DIR__ . '/datos.json');

        //convertimos $json a array PHP
        $arrayDatos = json_decode($json, true);


        // Recorrere el json
        foreach ($arrayDatos as $categoria => $ficha) {
            echo "<h2>" . $categoria . "</h2>";
            foreach ($ficha as $detalle) {

                echo "<div class='plato-item'>";
                echo "<div class='plato-header'>";
                echo "<h3 class='nombre'>" . $detalle['nombre'] . "</h3>";
                echo "<span class='num'># " . $detalle['id'] . "</span>";
                echo "</div>";
                echo "Ingredientes: " . $detalle['ingredientes'] . "<br>";
                echo "Alérgeno: " . $detalle['alergeno'] . "<br>";
                echo "Precio: " . $detalle['precio'] . "€<br>";

                if ($detalle['foto'] == "") {

                } else {
                    echo '<img src="' . $detalle['foto'] . '" >  <br>';
                }
                echo "</div>";


            }
        }
        ?>
        <?php
       

        if (isset($_SESSION['usuario'])) {
            if ($_SESSION['usuario'] === 'admin') {
                echo ' <a href="nuevoplato.php" class="btnSave">Agregar nuevo plato</a>';
            }
        }

        ?>



    </main>

    <footer>
        <nav>
            &copy 2026 Sidreria Davine 🍾
        </nav>

    </footer>
    <script src="Script.js"> </script>
</body>

</html>