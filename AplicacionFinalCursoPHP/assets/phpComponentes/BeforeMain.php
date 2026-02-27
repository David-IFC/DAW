<!DOCTYPE html>
<html lang=<?php echo $lang;?>>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $titulo; ?></title>
    
    <link rel="stylesheet" href="style.css">
</head>

<body class=<?php echo $clase; ?>>
    <header>
        <nav>
            <?php

            if ($home) {

                echo '<button class="home" onclick="transicion(\'index.php?lang=' . $lang . '\')"><img src="assets/img/Logo.png" alt=""> </button>';

            }
            if ($idioma) {

                echo ' <details class="idioma">
    <summary>
        <span data-key="idioma">' . $texto["idioma"] . '</span>
        <br>
        <img class="flag" src="https://flagcdn.com/32x24/es.png" alt="España">
    </summary>
    <a href="index.php?lang=es" onclick="window.location=this.href;" data-lang="es">
        <span data-key="español">' . $texto["español"] . '</span>
        <br><img class="flag" src="https://flagcdn.com/32x24/es.png" alt="España">
    </a>
    <a href="index.php?lang=en" onclick="window.location=this.href;" data-lang="en">
        <span data-key="ingles">' . $texto["ingles"] . '</span>
        <br><img class="flag" src="https://flagcdn.com/32x24/us.png" alt="Estados Unidos">
    </a>

</details>';
            }
            if ($registro) {
                echo '<div class="botonesRegistro" >
    <button  onclick="transicion(\'Registro.php?lang=' . $lang . '\')">'.$texto["resgistrar"].'</button>
    <button onclick="transicion(\'IniciarSesion.php?lang=' . $lang . '\')">'.$texto["iniciarSesion"].'</button>
</div>';
            }


            ; ?>
        </nav>



    </header>