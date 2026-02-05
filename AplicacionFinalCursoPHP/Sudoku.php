<? include "assets/phpComponentes/datos.php"; ?>
<? $titulo = "Sudoku";
$clase = "Sudoku";
$java = "Sudoku.js";  ?>

<? include "assets/phpComponentes//BeforeMain.php"; ?>

<main>

    <div class="contenedorPrincipal">

        <div class="divTiempo">

            <img class="img" src="assets/img/relojArenaAzul.png" alt="">

            <p class="tiempo"><span class="numeroTiempo-TiempoTexto"></span><span class="letraS"> s</span> </p>


        </div>

        <table class="matriz" border="1">
            <tbody id="tablero"></tbody>
        </table>
        <div class="textAreaBotones-TiempoTexto"> <textarea readonly class="textoUsuario-TiempoTexto oculto"></textarea>
            <button class="botonEmpezarTiempo" onclick="generacionSudoku()">GenerarSudoku</button>

        </div>

        <div class="resultadoTiempo oculto"></div>
        <button class="botonEmpezarTiempo reintentar oculto" onclick="reload()">Reintentar</button>

    </div>
</main>

<? include "assets/phpComponentes/AfterMain.php";?>