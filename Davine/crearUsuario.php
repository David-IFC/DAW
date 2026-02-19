<?php

$sessionPath = __DIR__ . '/tmp_sessions';
if (!is_dir($sessionPath)) {
    mkdir($sessionPath, 0777, true);
}
session_save_path($sessionPath);
// Inicia la sesión
session_start(); ?>
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


        <p>Login</p>
        <form method="POST">
            <br>
            <label class="form">Usuario
                <input required type="text" placeholder="Usuario" name="usuario" class="form"></label>

            <br>
            <label class="form">Contraseña
                <input required type="password" placeholder="contrasena" name="contrasena" class="form"></label>
            <br>

            <input type="submit" value="Entrar" name="Login" class="btnSave" class="form">

        </form>
        <?php
        function miFuncion()
        {
            //01 carga del JSON
            $json = file_get_contents(__DIR__ . '/login.json');

            //02 convertir JSON a array PHP (asociativo)
            $datos = json_decode($json, true);
            //print_r($datos); // or || : hay que negar el isset si el usuario no exist o la contreseña no exite 
            if (!isset($_POST["usuario"]) || !isset($_POST["contrasena"])) {

                return;
            }
            if ($datos["usuario"] == $_POST["usuario"] && $datos["contra"] == $_POST["contrasena"]) {
                echo "Sesion iniciada correctamente <br>";
                $_SESSION['usuario'] = 'admin';
            } else {
                echo "Error en las credenciales";
            }
        }

        if (isset($_POST["Login"])) {
            miFuncion();
        }
        ?>
        <a href="index.php">Volver</a>
    </main>

    <footer>
        <nav>
            &copy 2026 Sidreria Davine 🍾
        </nav>

    </footer>
    <script src="Script.js"> </script>
</body>

</html>