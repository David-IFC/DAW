<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><? echo $titulo; ?></title>
    <!--     para poder iniciar desde esta carpeta el servidor de wordpress-->
    <base href="/a/">
    <link rel="stylesheet" href="style.css">
</head>

<body class=<? echo $clase; ?>>
    <header>
        <nav>
            <?

            if ($home) {

                echo '<button class="home"><a  href="index.php"><img src="assets/img/Logo.png" alt=""></a> </button>';
                
            }
            
            ; ?>
        </nav>



    </header>