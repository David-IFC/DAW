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


        <h1>Agregar nuevo plato</h1>
        <form action="platocreado.php" method="get">
            <label>Categoria</label>
            <select required name="categoria" id="opcion">
                <option value="">-- Selecciona --</option>
                <option value="Primero">Primero</option>
                <option value="Segundo">Segundo</option>
                <option value="Postre">Postre</option>
                <option value="Bebida">Bebida</option>
            </select>
            <br>
            <label>Nombre del plato</label>
            <input required type="text" placeholder="insertar nombre del plato" name="nombrePlato">

            <br>
            <label>Ingredientes</label>
            <input required type="text" placeholder="insertar ingredientes" name="ingredientes">
            <br>
            <label>Alergenos</label>
            <input required type="text" placeholder="insertar alergenos" name="alergenos">
            <br>
            <label>Precio</label>
            <input required type="text" placeholder="insertar precio" name="precio">
            <br>
            <label>Url de la Foto</label>
            <input type="text" placeholder="insertar foto" name="foto">
            <br>

            <input type="submit" value="Guardar Plato">
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