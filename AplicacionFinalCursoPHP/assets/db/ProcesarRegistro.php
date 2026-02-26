<?php

session_start(); // Sesión en memoria


?>

<?php
require_once "db.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $usuario = $_POST["username"] ?? '';
    $password = $_POST["password"] ?? '';

    if (!empty($usuario) && !empty($password)) {

        // Encriptar contraseña
        $passwordHash = password_hash($password, PASSWORD_DEFAULT);

        $sql = "INSERT INTO usuarios (user, psw) VALUES (:user, :psw)";
        $stmt = $conexion->prepare($sql);

        $stmt->bindParam(":user", $usuario);
        $stmt->bindParam(":psw", $passwordHash);

        try {
            $stmt->execute();
            $_SESSION['mensaje_registro'] = ["tipo" => "exito", "texto" => "Usuario registrado correctamente"];
        } catch (PDOException $e) {
            // Verificar si es error por duplicado de usuario
            if ($e->getCode() == 23000) {
                $_SESSION['mensaje_registro'] = ["tipo" => "error", "texto" => "El usuario ya existe. Por favor, elige otro."];
            } else {
                $_SESSION['mensaje_registro'] = ["tipo" => "error", "texto" => "Error al registrar: " . $e->getMessage()];
            }
        }

    } else {

    }
    // Redirigir de vuelta a Registro.php
    header("Location: /Registro.php");

    $stmt = null;
    $conexion = null;
    exit;
    /*  $sql = "SELECT * FROM usuarios ORDER BY id DESC";
     $stmt = $conexion->prepare($sql);
     $stmt->execute();

     $usuarios = $stmt->fetchAll(PDO::FETCH_ASSOC);
     if ($usuarios) {

         echo "<table border='1' cellpadding='5'>";
         echo "<tr><th>ID</th><th>Usuario</th><th>Contraseña</th></tr>";

         foreach ($usuarios as $usuario) {
             echo "<tr>";
             echo "<td>" . $usuario['id'] . "</td>";
             echo "<td>" . $usuario['user'] . "</td>";
             echo "<td>" . $usuario['psw'] . "</td>";
             echo "</tr>";
         }

         echo "</table>";
     } else {
         echo "No hay usuarios registrados.";
     }
  */

}
?>