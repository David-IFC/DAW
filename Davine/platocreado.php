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

        <h2>Tu plato ha sido registrado</h2>
        <?php
        //$activo=$_GET['activo'];
        $nombrePlato = $_GET['nombrePlato'];
        $ingredientes = $_GET['ingredientes'];
        $alergenos = $_GET['alergenos'];
        $precio = $_GET['precio'];
        $foto = $_GET['foto'];
        $categoria = $_GET['categoria'];
        echo "Categoria: " . $categoria-"<br>";
        // cargamos 📃 JSON
        $json = file_get_contents('datos.json');
        // decodificamos 📃JSON a 🧨Array PHP
        $platos = json_decode($json, true);
        $id = 0;
        foreach ($platos as $plato => $ficha) {

            foreach ($ficha as $detalle) {

                if ($id < $detalle['id']) {
                    $id = $detalle['id'] ;
                }

            }
        }
        $id=$id+1;
        // añadimos nuevo alumno al 🧨Array a partir de los datos capturados por GET
        
        array_push($platos[$categoria], [
            'id' => $id,
            'activo' => true,
            'nombre' => $nombrePlato,
            'ingredientes' => $ingredientes,
            'alergeno' => $alergenos,

            'precio' => $precio,
            'foto' => $foto
        ]);

        // revisamos que el alumno haya sido añadido al 🧨Array con print_r
        
        // codificamos el 🧨Array a JSON
        $newJson = json_encode($platos, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
        // guardamos el 📃 JSON
        file_put_contents('datos.json', $newJson);

        ?>
        <a href="index.php"> Volver</a>
    </main>

    <footer>
        <nav>
            &copy 2026 Sidreria Davine 🍾
        </nav>

    </footer>
    <script src="Script.js"> </script>
</body>

</html>