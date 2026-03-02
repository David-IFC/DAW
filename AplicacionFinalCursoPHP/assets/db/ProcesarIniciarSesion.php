<?php
require_once "db.php";
session_start();

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $usuario = $_POST["username"] ?? '';
    $password = $_POST["password"] ?? '';
    echo "usuario: " . $usuario . " psw: " . $password . "<br>";
    if (!empty($usuario) && !empty($password)) {


        $sql = "SELECT psw FROM usuarios WHERE user = :user LIMIT 1";
        $stmt = $conexion->prepare($sql);

        $stmt->bindParam(":user", $usuario);
        $stmt->execute();
        $resultado = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($resultado) {
            //esta en la db
            if (password_verify($password, $resultado['psw'])) {
                // Contraseña correcta
                $_SESSION['NombreUsuario'] = $usuario;

                header("Location: /IniciarSesion.php");
                exit();
            } else {
                $_SESSION["ContraMal"] = true;
                $stmt = null;
                $conexion = null;
                header("Location: /IniciarSesion.php");
                exit();
            }

        } else {
            //no esta
            $_SESSION["NoEsta"] = true;
            $stmt = null;
            $conexion = null;
            header("Location: /IniciarSesion.php");
            exit();
        }

    } else {
        //no deberia de entrar dado que en el propio formulario se comprueba qye exista user y psw
    }



}
?>