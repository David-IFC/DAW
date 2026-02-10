<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $titulo; ?></title>
    <!--     para poder iniciar desde esta carpeta el servidor de wordpress-->
    <base href="/a/">
    <link rel="stylesheet" href="style.css">
</head>

<body class=<?php echo $clase; ?>>
    <header>
        <nav>
            <?php

            if ($home) {

                echo '<button class="home"><a  href="index.php"><img src="assets/img/Logo.png" alt=""></a> </button>';

            }
            if ($idioma) {

                echo ' <details class="idioma">
    <summary>
        <span data-key="idioma">'. $texto["idioma"].'</span>
        <br>
        <img class="flag" src="https://flagcdn.com/32x24/es.png" alt="España">
    </summary>
    <a href="index.php?lang=es" onclick="window.location=this.href;" data-lang="es">
        <span data-key="español">'.$texto["español"].'</span>
        <br><img class="flag" src="https://flagcdn.com/32x24/es.png" alt="España">
    </a>
    <a href="index.php?lang=en" onclick="window.location=this.href;" data-lang="en">
        <span data-key="ingles">'.$texto["ingles"].'</span>
        <br><img class="flag" src="https://flagcdn.com/32x24/us.png" alt="Estados Unidos">
    </a>
    <a href="index.php?lang=fr" onclick="window.location=this.href;" data-lang="fr">
        <span data-key="frances">'.$texto["frances"].'</span>
        <br><img class="flag" src="https://flagcdn.com/32x24/fr.png" alt="Francia">
    </a>
</details>';
            }


            ; ?>
        </nav>



    </header>