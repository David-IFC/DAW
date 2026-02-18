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

                echo "<span class='nombre'>Nombre: " . $detalle['nombre'] . "</span><br>";
                echo "Plato nº: " . $detalle['id'] ."<br>";
                echo "Ingredientes: " . $detalle['ingredientes'] . "<br>";
                echo "Alérgeno: " . $detalle['alergeno'] . "<br>";
                echo "Precio: " . $detalle['precio'] . "<br>";

                if ($detalle['foto'] == "") {

                } else {
                    echo '<img src="' . $detalle['foto'] . '" >  <br>';
                }


            }
        }
        ?>
        <a href="nuevoplato.php">Agregar nuevo plato</a>

    </main>

    <footer>
        <nav>
            &copy 2026 Sidreria Davine 🍾
        </nav>

    </footer>
    <script src="Script.js"> </script>
</body>

</html>